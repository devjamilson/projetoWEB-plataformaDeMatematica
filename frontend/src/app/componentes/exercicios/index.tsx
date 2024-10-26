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
  index: number;
  onResposta: (resposta: string, index: number) => void; // Adicione aqui
}

export default function Exercicios({
  descricao,
  a,
  b,
  c,
  d,
  e,
  certa,
  index,
  onResposta, // Recebe a função onResposta como props
}: ExerciciosProps) {
  const { setResposta } = useRespostas();
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [confirmada, setConfirmada] = useState(false); // Novo estado para controlar a confirmação

  const handleConfirmarResposta = () => {
    if (respostaSelecionada) {
      setResposta(index, respostaSelecionada);
      setConfirmada(true); // Define que a resposta foi confirmada

      // Verifica se a resposta está correta e atualiza o feedback
      const feedbackMsg = respostaSelecionada === certa ? 'Correto!' : 'Incorreto. Tente novamente.';
      setFeedback(feedbackMsg);

      // Atualiza o desempenho ao confirmar a resposta
      onResposta(respostaSelecionada, index); // Chama a função para atualizar o desempenho
    }
  };

  // Define a classe da borda com base na resposta confirmada
  const borderClass = confirmada 
    ? (respostaSelecionada === certa ? 'border-correct' : 'border-incorrect') 
    : '';

  return (
    <div className={`container-exercicio ${borderClass}`}>
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
              disabled={confirmada} 
            />
            {resposta}
          </label>
        ))}
      </div>
      <div className={`container-responder ${borderClass}`}>
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
