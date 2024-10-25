// src/componentes/Exercicios.tsx
'use client';
import { useState } from 'react';
import { useRespostas } from '../../context/RespostasContext';
import './style.scss';

interface ExerciciosProps {
  descricao: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  certa: string;
  index: number; // índice da questão
}

export default function Exercicios({ descricao, a, b, c, d, e, certa, index }: ExerciciosProps) {
  const { setResposta } = useRespostas();
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleConfirmarResposta = () => {
    if (respostaSelecionada) {
      setResposta(index, respostaSelecionada);
      setFeedback(respostaSelecionada === certa ? 'Correto!' : 'Incorreto. Tente novamente.');
    }
  };

  return (
    <div className="container-exercicio">
      <p className="container-descricao-exercicio">{descricao}</p>
      <div className="container-respostas-exercicio">
        {[a, b, c, d, e].map((resposta, idx) => (
          <label key={idx} className="resposta-opcao">
            <input
              type="radio"
              name={`resposta-${index}`}
              value={resposta}
              checked={respostaSelecionada === resposta}
              onChange={() => setRespostaSelecionada(resposta)}
            />
            {resposta}
          </label>
        ))}
      </div>
      <div className="container-responder">
        <div>
          {feedback && <p className="feedback">{feedback}</p>}
        </div>
        <button onClick={handleConfirmarResposta} disabled={!respostaSelecionada}>
          Responder
        </button>
        
      </div>
      
    </div>
  );
}
