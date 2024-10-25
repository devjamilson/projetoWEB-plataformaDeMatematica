'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Mude para 'next/navigation'
import './style.scss';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuário e senha padrão
    if (username === 'admin' && password === 'admin') {
      router.push('/home'); // Redireciona para a página home
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite o seu e-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <a href="/cadastro">Cadastre-se</a>
        </div>
      </form>
    </div>
  );
}
