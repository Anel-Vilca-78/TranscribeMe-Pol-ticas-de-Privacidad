// src/components/Footer.jsx

import React from 'react';
import fbIcon from '../../public/fb.png';
import igIcon from '../../public/ig.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h4>TranscribeMe</h4>
        <p>© 2024 TranscribeMe. Todos los derechos reservados.</p>
      </div>
      <div className="footer-section">
        <p>Desarrollado por: <span className="highlight">SoftInCraft</span></p>
        <p>Contacto: <a href="mailto:SoftInCraft@hotmail.com">SoftInCraft@hotmail.com</a></p>
      </div>
      <div className="footer-section">
        <p>Redes sociales:</p>
        <a href="https://www.facebook.com">
          <img src={fbIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com">
          <img src={igIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
