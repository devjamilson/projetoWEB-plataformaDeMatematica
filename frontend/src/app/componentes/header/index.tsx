'use client';
import { IoMdSearch } from "react-icons/io";
import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="metrics">
        <div className="metric">
          <h3>Acertos Totais</h3>
          <p>100</p>
        </div>
        <div className="metric">
          <h3>Erros Totais</h3>
          <p>200</p>
        </div>
        <div className="metric">
          <h3>Porcentagem Acertos Totais</h3>
          <p>50%</p>
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
