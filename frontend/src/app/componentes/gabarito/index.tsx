// src/app/page.tsx
'use client';
import './style.scss';
import { useRespostas } from '../../context/RespostasContext';

export default function Gabarito() {
  const { respostas } = useRespostas();

  return (
    <div className="gabarito">
      <h2>Gabarito</h2>
      <div className="gabarito-grid">
        {respostas.map((resposta, index) => {
          const isCorrect = resposta === '8'; // Verifique a resposta correta aqui
          const borderClass = isCorrect ? 'border-correct' : resposta ? 'border-incorrect' : '';
          
          return (
            <div key={index} className={`gabarito-item ${borderClass}`}>
              {resposta || ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};
