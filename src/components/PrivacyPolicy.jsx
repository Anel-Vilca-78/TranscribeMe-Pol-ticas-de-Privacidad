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
                  <li>Proveer el acceso a la plataforma y servicios de TranscribeMe.</li>
                  <li>Almacenar y gestionar las transcripciones de las sesiones para futuras consultas por los usuarios.</li>
                  <li>Realizar evaluaciones y encuestas para asegurar y mejorar la calidad del servicio proporcionado.</li>
                </ul>
                De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
                <ul>
                  <li>Analizar el uso de la plataforma para mejorar su funcionamiento y desarrollo de nuevas funcionalidades.</li>
                  <li>Realizar estudios de mercado y análisis estadísticos.</li>
                </ul>
                En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, enviando un correo electrónico a SoftInCraft@hotmail.com, indicando claramente su negativa al tratamiento de sus datos para dichas finalidades. También puede solicitar la eliminación de sus datos personales, excepto aquellos necesarios para estadísticas anónimas, directamente desde nuestra aplicación. Para el ejercicio de cualquiera de los derechos ARCO, puede enviar una solicitud al correo electrónico SoftInCraft@hotmail.com o visitar nuestra oficina en la dirección mencionada anteriormente.
                La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
              </td>
            </tr>
            <tr>
              <td><strong>¿Dónde puedo consultar el aviso de privacidad integral?</strong></td>
              <td>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en la sección de "Aviso de Privacidad" dentro de nuestra aplicación o en nuestro sitio web oficial .</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrivacyPolicy;