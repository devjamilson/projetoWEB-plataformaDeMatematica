'use client'
import './style.scss';

export default function Cadastro() {
  return (
    <div className="container-cadastro">
      <form className="cadastro-form">
        <h2>Cadastre-se</h2>
        
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite o seu nome"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite p seu e-mail"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Cadastre-se
        </button>

        <div className="signup-link">
          <a href="/login">Acessar</a>
        </div>
      </form>
    </div>
  );
}
