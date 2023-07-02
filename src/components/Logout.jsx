import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!");

    setTimeout(() => {
      navigate('/App');
    }, 2000); // Redirigir después de 2 segundos
  }

  useEffect(() => {
    return () => {
      clearTimeout(); 
    };
  }, []);

  return (
    <>
      <Navbar />
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </>
  );
}

export default LogoutButton;
