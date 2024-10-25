'use client';

import './style.scss';
import Header from '../componentes/header';
import { RespostasProvider } from '../context/RespostasContext';
import User from '../componentes/user';
import Exercicios from '../componentes/exercicios';
import Gabarito from '../componentes/gabarito';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
        setRespostasCorretas(exerciciosData.map((exercicio) =>  exercicio[exercicio.certa]));
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
  };

  const calcularDesempenho = async () => {
    // Calcular acertos e erros
    const qtd_acertos = respostasUsuario.filter((resposta, index) => resposta === respostasCorretas[index]).length;
    const qtd_erros = exercicios.length - qtd_acertos; // Número total de questões menos os acertos
    
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
          <Header />
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
            <button onClick={calcularDesempenho}>Registrar Desempenho</button> {/* Botão para registrar desempenho */}
          </div>
        </div>
      </div>
    </RespostasProvider>
  );
}
