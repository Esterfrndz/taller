import React from 'react';
import './header.css'; // Archivo de estilos CSS para el header
import { FaUserAlt } from "react-icons/fa";



const Header = ({ isLoggedIn, handleLogin, handleLogout }) => { //props que recibe
  return (
    <header className="header">
      <div className="logo">
        {/* <img src="/path/to/logo.png" alt="Logo" /> */}
        <h4>Taller</h4>
      </div>
      <div className="login-controls">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <button onClick={handleLogin}>Iniciar Sesión</button>
        )}
      </div>
    </header>
  );
};

export default Header;



