// src/componentes/gabarito.tsx
'use client';
import './style.scss';
import { useRespostas } from '../../context/RespostasContext';
import axios from 'axios';

export default function Gabarito() {
  const { respostas, respostasCorretas } = useRespostas();

  const handleRefreshDesempenho = async () => {
    try {
      // Atualiza o desempenho na API
      const qtd_acertos = respostas.filter((resposta, index) => resposta === respostasCorretas[index]).length;
      const qtd_erros = respostas.filter((resposta, index) => resposta && resposta !== respostasCorretas[index]).length;

      await axios.post('http://localhost:5500/api/desempenho', {
        qtd_acertos,
        qtd_erros,
      });

      // Força o re-fetch dos dados no componente Reader
      const readerRefreshEvent = new Event('readerRefresh');
      window.dispatchEvent(readerRefreshEvent);
    } catch (error) {
      console.error('Erro ao atualizar desempenho:', error);
    }
  };

  return (
    <div className="gabarito">
      <h2>Gabarito</h2>
      <div className="gabarito-grid">
        {respostas.map((resposta, index) => {
          const isCorrect = resposta === respostasCorretas[index];
          const borderClass = isCorrect ? 'border-correct' : resposta ? 'border-incorrect' : '';

          return (
            <div key={index} className={`gabarito-item ${borderClass}`}>
              {resposta || ''}
            </div>
          );
        })}
      </div>
      <button className="atualizar-desempenho" onClick={handleRefreshDesempenho}>
        Atualizar desempenho
      </button>
    </div>
  );
}
