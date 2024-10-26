// src/pages/home.tsx
'use client';
import './style.scss';
import { useEffect, useState } from 'react';
import { RespostasProvider } from '../context/RespostasContext';
import Reader from '../componentes/reader';
import User from '../componentes/user';
import Exercicios from '../componentes/exercicios';
import Gabarito from '../componentes/gabarito';
import axios from 'axios';

export default function Home() {
  const [exercicios, setExercicios] = useState([]);
  const [respostasCorretas, setRespostasCorretas] = useState<string[]>([]);
  const [respostasUsuario, setRespostasUsuario] = useState<string[]>([]);

  useEffect(() => {
    fetchExercicios();
  }, []);

  const fetchExercicios = async (searchTerm = '') => {
    try {
      console.log('Buscando exercícios com o termo:', searchTerm);
      const response = await axios.get(`http://localhost:5500/api/exercicios/subarea${searchTerm ? `?subarea=${searchTerm}` : ''}`);
      console.log('Dados recebidos da API:', response.data); // Log da resposta da API
      setExercicios(response.data);
  
      // Extraímos as respostas corretas
      setRespostasCorretas(response.data.map((exercicio) => exercicio[exercicio.certa]));
    } catch (error) {
      console.error('Erro ao buscar os exercícios:', error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    // Faz o reload da página
    fetchExercicios(searchTerm); // Chama fetchExercicios com o termo de pesquisa
  };
  
  const handleResposta = (resposta: string, index: number) => {
    const updatedRespostas = [...respostasUsuario];
    updatedRespostas[index] = resposta;
    setRespostasUsuario(updatedRespostas);
    calcularDesempenho(updatedRespostas);
  };

  const calcularDesempenho = async (respostasUsuarioAtualizadas: string[]) => {
    const qtd_acertos = respostasUsuarioAtualizadas.filter((resposta, index) => resposta && resposta === respostasCorretas[index]).length;
    const qtd_erros = respostasUsuarioAtualizadas.filter((resposta, index) => resposta && resposta !== respostasCorretas[index]).length;
    
    try {
      const response = await axios.post('http://localhost:5500/api/desempenho', {
        qtd_acertos: Number(qtd_acertos),
        qtd_erros: Number(qtd_erros),
      });
      console.log('Desempenho registrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao calcular desempenho:', error);
    }
  };

  return (
    <RespostasProvider respostasCorretas={respostasCorretas}> 
      <div className='home-page'>
        <div className='container-header-home'>
          <Reader onSearch={handleSearch} /> {/* Passa setRespostasUsuario para Reader */}
          <User />
        </div>

        <div className='container-exercicio-home'>
          <div className='container-exercicios'>
            {exercicios.map((exercicio, index) => {
              const respostaCorreta = exercicio[exercicio.certa];

              return (
                <Exercicios 
                  key={index}
                  descricao={exercicio.descricao}
                  a={exercicio.a}
                  b={exercicio.b}
                  c={exercicio.c}
                  d={exercicio.d}
                  e={exercicio.e}
                  certa={respostaCorreta}
                  index={index}
                  onResposta={(respostaCorreta) => handleResposta(respostaCorreta, index)} 
                />
              );
            })}
          </div>

          <div className='container-gabarito'>
            <Gabarito />
          </div>
        </div>
      </div>
    </RespostasProvider>
  );
}
