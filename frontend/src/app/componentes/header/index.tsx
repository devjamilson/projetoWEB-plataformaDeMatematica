'use client';
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './style.scss';

export default function Header() {
  const [acertosTotais, setAcertosTotais] = useState(0);
  const [errosTotais, setErrosTotais] = useState(0);
  const [porcentagemAcertos, setPorcentagemAcertos] = useState('0%');

  useEffect(() => {
    // Função para buscar as métricas da API
    const fetchDesempenho = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/desempenho');
        const data = await response.json();

        // Supondo que a resposta tenha as propriedades acertos e erros
        const { acertos, erros } = data;

        setAcertosTotais(acertos);
        setErrosTotais(erros);

        // Calcular a porcentagem de acertos
        const total = acertos + erros;
        const porcentagem = total > 0 ? ((acertos / total) * 100).toFixed(2) + '%' : '0%';
        setPorcentagemAcertos(porcentagem);
      } catch (error) {
        console.error('Erro ao buscar as métricas:', error);
      }
    };

    // Chamar a função de busca ao montar o componente
    fetchDesempenho();
  }, []); // O array vazio [] significa que isso roda apenas uma vez quando o componente é montado

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
