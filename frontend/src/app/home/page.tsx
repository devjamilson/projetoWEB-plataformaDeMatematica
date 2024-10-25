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
  const [respostasUsuario, setRespostasUsuario] = useState<string[]>([]); // Para armazenar as respostas do usuário

  useEffect(() => {
    const fetchExercicios = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/exercicios');
        const exerciciosData = response.data.slice(0, 10);
        setExercicios(exerciciosData);

        // Extraímos as respostas corretas
        setRespostasCorretas(exerciciosData.map((exercicio) => exercicio[exercicio.certa]));
      } catch (error) {
        console.error('Erro ao buscar os exercícios:', error);
      }
    };

    fetchExercicios();
  }, []);

  const handleResposta = (resposta: string, index: number) => {
    const updatedRespostas = [...respostasUsuario];
    updatedRespostas[index] = resposta;
    setRespostasUsuario(updatedRespostas);
    
    // Atualiza o desempenho cada vez que o usuário responde
    calcularDesempenho(updatedRespostas);
  };

  const calcularDesempenho = async (respostasUsuarioAtualizadas: string[]) => {
    // Contabilizar acertos e erros considerando apenas as respostas respondidas
    const qtd_acertos = respostasUsuarioAtualizadas.filter((resposta, index) => resposta && resposta === respostasCorretas[index]).length;
    const qtd_erros = respostasUsuarioAtualizadas.filter((resposta, index) => resposta && resposta !== respostasCorretas[index]).length;
    
    console.log('Dados enviados:', { qtd_acertos, qtd_erros }); // Verifica os dados que serão enviados
  
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
          <Reader />
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
                  onResposta={(respostaCorreta) => handleResposta(respostaCorreta, index)} // Passa a resposta do usuário
                />
              );
            })}
          </div>

          <div className='container-gabarito'>
            <Gabarito />
            {/* Removido o botão para registrar desempenho */}
          </div>
        </div>
      </div>
    </RespostasProvider>
  );
}
