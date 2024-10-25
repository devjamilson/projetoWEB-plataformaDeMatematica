// src/app/home/page.tsx
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
