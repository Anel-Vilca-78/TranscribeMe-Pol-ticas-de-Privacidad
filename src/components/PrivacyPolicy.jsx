// src/components/PrivacyPolicy.jsx

import React from 'react';
import banner from '../../public/banner.jpg';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner" />
        <h2 className="banner-text">Aviso de privacidad</h2>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th colSpan="2">AVISO DE PRIVACIDAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>¿Quiénes somos?</strong></td>
              <td>SoftInCraft, con domicilio en Av. Central S/N Colonia Solidaridad, 30470, VILLAFLORES, CHIS. es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</td>
            </tr>
            <tr>
              <td><strong>¿Para qué fines utilizaremos sus datos personales?</strong></td>
              <td>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                <ul>
                  <li>Finalidad principal A</li>
                  <li>Finalidad principal B</li>
                  <li>Finalidad principal C</li>
                </ul>
                De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
                <ul>
                  <li>Finalidad secundaria A</li>
                  <li>Finalidad secundaria B</li>
                </ul>
                En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, [descripción del mecanismo que tenga implementado el responsable. IMPORTANTE, el mecanismo a que se hace referencia debe permitir al titular manifestar su negativa previamente al tratamiento de su información].
                La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
              </td>
            </tr>
            <tr>
              <td><strong>¿Dónde puedo consultar el aviso de privacidad integral?</strong></td>
              <td>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en [describir medios].</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
