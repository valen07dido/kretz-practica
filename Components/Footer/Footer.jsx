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

        <Image src={logo} className={styles.image}/>

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

        <div className={styles.location}>
        <p className={styles.title}>PLANTA INDUSTRIAL</p>
          <p className={styles.text}>
            Ruta Nacional N°9 km 2762126 / Pueblo Esther / Santa Fe / Argentina
          </p>
          <p className={styles.text}>Tel: 0054 341 492 7400</p>
          <a href="mailTo:ventas@kretz.com.ar"  className={styles.mail}>ventas@kretz.com.ar</a>
        </div>

        <div className={styles.location}>
          <p className={styles.title}>OFICINA MEXICO</p>
          <p className={styles.text}>
            Calle de la Nebulosa 3033, Jardines del Bosque 44520 Guadalajara,
            Jal., México
          </p>
          <p className={styles.text}>Tel: +52 33 3673 0606</p>
          <a href="mailTo:ventas@kretz.com.mx" className={styles.mail}>ventas@kretz.com.mx</a>
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
        <p className={styles.componentNav}>Preguntas Frecuentes</p>
        <p className={styles.componentNav}>Políticas de privacidad</p>
        <p className={styles.componentNav}>Políticas de devolución</p>
        <p className={styles.componentNav}> Términos y condiciones </p>
      </div>

      <div className={styles.chest3}>

        <div className={styles.Box1}>
          <h3>Un mundo de soluciones</h3>
        </div>

        <div className={styles.Box2}>
          <h4 className={styles.copyright}>
            <FaRegCopyright /> Derechos reservados Kretz Global
          </h4>
        </div>

      </div>

    </div>
  );
};

export default Footer;
