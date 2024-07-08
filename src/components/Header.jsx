// src/components/Header.jsx

import React from 'react';
import logo from '../../public/logo.png';
import tos from '../../public/tos.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="TranscribeMe Logo" className="logo" />
        <h1 className="site-title">TranscribeMe</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#policies">Políticas de privacidad</a></li>
          <li><a href="#account"><img src={tos} alt="User Account" className="account-icon" /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
