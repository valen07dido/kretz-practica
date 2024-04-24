import React from "react";
import logo from "@/public/logo-footer.png";
import styles from "@/Components/Footer/Footer.module.css";
import Image from "next/image";
import {
  FaFacebook,
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
          <a href="/" className={styles.links}>
            Home
          </a>
          <a href="/soporte" className={styles.links}>
            Soporte
          </a>
          <a href="/nosotros" className={styles.links}>
            Nosotros
          </a>
          <a href="/contacto" className={styles.links}>
            Contacto
          </a>
          <a href="/micuenta" className={styles.links}>
            Mi Cuenta
          </a>
        </div>

        <div>
        <p>PLANTA INDUSTRIAL</p>
          <p className={styles.text}>
            Ruta Nacional N°9 km 2762126 / Pueblo <br/> Esther / Santa Fe / Argentina
          </p>
          <p className={styles.text}>Tel: 0054 341 492 7400</p>
          <p>ventas@kretz.com.ar</p>
        </div>

        <div>
          <p>OFICINA MEXICO</p>
          <p className={styles.text}>
            Calle de la Nebulosa 3033, Jardines del <br/> Bosque 44520 Guadalajara,
            Jal., México
          </p>
          <p className={styles.text}>Tel: +52 33 3673 0606</p>
          <a href="mailTo:ventas@kretz.com.mx">ventas@kretz.com.mx</a>
        </div>

      </div>

      <div className={styles.chest2}>

        <div className={styles.icons}>
          <FaYoutube className={styles.icon}/>
          <FaFacebook className={styles.icon}/>
          <FaLinkedin className={styles.icon}/>
          <FaInstagram className={styles.icon}/>
        </div>
  
        <div className={styles.line}></div>

      </div>
      
      <div className={styles.navbar2}>
        <p className={styles.text}>Preguntas Frecuentes</p>
        <p className={styles.text}>Políticas de privacidad</p>
        <p className={styles.text}>Políticas de devolución</p>
        <p className={styles.text}> Términos y condiciones </p>
      </div>

      <div className={styles.chest3}>

        <div className={styles.Box1}>
          <h2>Un mundo de soluciones</h2>
        </div>

        <div className={styles.Box2}>
          <h4>
            <FaRegCopyright /> Todos los derechos reservados Kretz Global
          </h4>
        </div>

      </div>

    </div>
  );
};

export default Footer;
