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
        {respostas.map((resposta, index) => (
          <div key={index} className="gabarito-item">
            {resposta || ''}
          </div>
        ))}
      </div>
    </div>
  );
};
