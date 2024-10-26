'use client'
import './style.scss';
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function User() {
  const router = useRouter();

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('token'); 

    router.push('/login'); 
  };

  return (
    <div className="user">
      <div className="user-image">
        <FaUserCircle />
      </div>
      <div className="user-name">
        <h2>Admin</h2>
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </div>
      
    </div>
  );
}
