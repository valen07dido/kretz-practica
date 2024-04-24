import React from "react";
import logo from "@/public/logo-footer.png";
import styles from "@/Components/Footer/Footer.module.css";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chest}>
        <Image src={logo} />
        <div className={styles.navbar}>
          <a href="/">Home</a>
          <a href="/soporte">Soporte</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/contacto">Contacto</a>
          <a href="/micuenta">Mi Cuenta</a>
        </div>
        <div>
          <p>
            Ruta Nacional N°9 km 2762126 / Pueblo Esther / Santa Fe / Argentina
            Tel: 0054 341 492 7400
          </p>
          <p>ventas@kretz.com.ar</p>
        </div>
        <div>
          <p>OFICINA MEXICO</p>
          <p>
            Calle de la Nebulosa 3033, Jardines del Bosque 44520 Guadalajara,
            Jal., México
          </p>
          <p>Tel: +52 33 3673 0606</p>
          <a href="mailTo:ventas@kretz.com.mx">ventas@kretz.com.mx</a>
        </div>
      </div>

      <div>
        <div className={styles}>
          <FaYoutube />
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <div className={styles.line}></div>
      </div>
      <div>
        <p>Preguntas Frecuentes</p>
        <p>Políticas de privacidad</p>
        <p>Políticas de devolución</p>
        <p> Términos y condiciones </p>
      </div>
      <div>
        <div className={styles.Box1}>
          <h2>Un mundo de soluciones</h2>
        </div>
        <div className={styles.Box2}>
          <h4>
            <FaRegCopyright /> Todos los derechos reservados Kretz Glo
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
