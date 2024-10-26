// src/componentes/reader.tsx
'use client';
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './style.scss';

export default function Reader() {
  const [acertosTotais, setAcertosTotais] = useState(0);
  const [errosTotais, setErrosTotais] = useState(0);
  const [porcentagemAcertos, setPorcentagemAcertos] = useState('0%');
  
  const fetchDesempenho = async () => {
    try {
      const response = await fetch('http://localhost:5500/api/desempenho');
      const data = await response.json();

      const totalAcertos = data.reduce((total, item) => total + item.qtd_acertos, 0);
      const totalErros = data.reduce((total, item) => total + item.qtd_erros, 0);

      setAcertosTotais(totalAcertos);
      setErrosTotais(totalErros);

      const total = totalAcertos + totalErros;
      const porcentagem = total > 0 ? ((totalAcertos / total) * 100).toFixed(2) + '%' : '0%';
      setPorcentagemAcertos(porcentagem);
    } catch (error) {
      console.error('Erro ao buscar as métricas:', error);
    }
  };

  useEffect(() => {
    fetchDesempenho();

    // Escuta o evento personalizado para atualizar os dados
    const handleRefresh = () => {
      fetchDesempenho();
    };

    window.addEventListener('readerRefresh', handleRefresh);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('readerRefresh', handleRefresh);
    };
  }, []);

  return (
    <header className="header">
      <div className="metrics">
        <div className="metric">
          <h3>Acertos Totais</h3>
          <p>{acertosTotais}</p>
        </div>
        <div className="metric">
          <h3>Erros Totais</h3>
          <p>{errosTotais}</p>
        </div>
        <div className="metric">
          <h3>Porcentagem Acertos Totais</h3>
          <p>{porcentagemAcertos}</p>
        </div>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="search-input"
        />
        <button className="search-btn"><IoMdSearch /></button>
      </div>
    </header>
  );
}
