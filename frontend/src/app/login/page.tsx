'use client'
import './style.scss';

export default function Login() {
  return (
    <div className="container-login">
      <form className="login-form">
        <h2>Login</h2>
        
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite o seu e-mail"
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

        <div className="form-footer">
          <a href="/reset-password" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <div className="signup-link">
          <a href="/signup">Cadastre-se</a>
        </div>
      </form>
    </div>
  );
}
