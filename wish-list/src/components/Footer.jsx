import React from "react";
import { Link } from "react-router-dom";
import Logo from "../static/Carvajal.jpg"
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Web-health" />
      </div>
      <ul>
        <li>
          <Link to="#">Empresa</Link>
          <ul>
            <li>Nuestro equipo</li>
            <li>Trabaja con nosotros</li>
            <li>Solidaridad</li>
            <li>Sala de prensa</li>
            <li>Socios</li>
          </ul>
        </li>
        <li>
          <Link to="#">Asistencia</Link>
          <ul>
            <li>Artículos</li>
            <li>Foros</li>
            <li>Estado</li>
          </ul>
        </li>
        <li>
          <Link to="#">Comunidad</Link>
          <ul>
            <li>Únete</li>

          </ul>
        </li>
        <li>
          <Link to="#"> Contacto</Link>
          <ul>
            <li><a href="mailto:luisangel1808@hotmail.com">Correo desarrollador</a></li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};


export default Footer;
