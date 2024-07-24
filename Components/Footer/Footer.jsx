"use client";
import React, { useState, useEffect } from "react";
import styles from "@/Components/Footer/Footer.module.css";
import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenMexico, setIsOpenMexico] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = (e) => {
    if (e.target.id === "Company") {
      setIsOpenCompany(!isOpenCompany);
    } else if (e.target.id === "Mexico") {
      setIsOpenMexico(!isOpenMexico);
    }
  };

  return (
    <div className={styles.container}>
      {isMobile ? (
        <div>
          <button id="Company" onClick={handleOpen}>
            oficina
          </button>
          {isOpenCompany && <p>holaempresa</p>}
          <button id="Mexico" onClick={handleOpen}>
            mexico
          </button>
          {isOpenMexico && <p>holamexico</p>}
        </div>
      ) : (
        <div className={styles.chest}>
          <div className={styles.location}>
            <p className={styles.title}>PLANTA INDUSTRIAL</p>
            <p className={styles.text}>
              Ruta Nacional N°9 km 276 / 2126 / Pueblo Esther / Santa Fe /
              Argentina
            </p>
            <p className={styles.text}>Tel: 0054 341 492 7400</p>
            <Link href="mailto:ventas@kretz.com.ar" className={styles.mail}>
              ventas@kretz.com.ar
            </Link>
          </div>

          <div className={styles.location}>
            <p className={styles.title}>OFICINA MEXICO</p>
            <p className={styles.text}>
              Calle de la Nebulosa 3033, Jardines del Bosque 44520 Guadalajara,
              Jal., México
            </p>
            <p className={styles.text}>Tel: +52 33 3673 0606</p>
            <Link href="mailto:ventas@kretz.com.mx" className={styles.mail}>
              ventas@kretz.com.mx
            </Link>
          </div>
        </div>
      )}

      <div className={styles.chest2}>
        <div className={styles.icons}>
          <FaYoutube className={styles.icon} />
          <FaFacebook className={styles.icon} />
          <FaLinkedin className={styles.icon} />
          <FaInstagram className={styles.icon} />
        </div>

        <div className={styles.line}></div>
      </div>

      <div className={styles.navbar2}>
        <p className={styles.componentNav}>Preguntas Frecuentes</p>
        <p className={styles.componentNav}>Políticas de privacidad</p>
        <p className={styles.componentNav}>Políticas de devolución</p>
        <p className={styles.componentNav}>Términos y condiciones</p>
      </div>

      <div className={styles.chest3}>
        <div className={styles.Box1}>
          <h3 className={styles.speach}>Un mundo de soluciones</h3>
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

