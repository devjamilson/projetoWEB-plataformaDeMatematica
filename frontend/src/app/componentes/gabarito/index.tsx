// src/app/page.tsx
'use client';
import './style.scss';
import { useRespostas } from '../../context/RespostasContext';

export default function Gabarito() {
  const { respostas, respostasCorretas } = useRespostas();

  return (
    <div className="gabarito">
      <h2>Gabarito</h2>
      <div className="gabarito-grid">
        {respostas.map((resposta, index) => {
          // Verifique se a resposta do usuário está correta comparando com respostasCorretas
          const isCorrect = resposta === respostasCorretas[index];
          
          // Printar o valor de isCorrect para cada resposta
          console.log(`Questão ${index + 1}:`, { resposta, correta: respostasCorretas[index], isCorrect });

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
}
