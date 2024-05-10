"use client";
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const ParentComponent = ({ children, name }) => {
  const [hidden, setHidden] = useState(false);

  const handleMouseEnter = () => {
    setHidden(true);
  };

  const handleMouseLeave = () => {
    setHidden(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children(hidden)}
    </div>
  );
};

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className={styles.container}>
        <Image src={logo} className={styles.image} alt="logo" />
        <div className={styles.bar}>
          <ParentComponent name="productos">
            {(hidden) => (
              <>
                <Link
                  href="/productos"
                  name="productos"
                  className={
                    pathname == "/productos"
                      ? styles.navigationActive
                      : styles.navigation
                  }
                >
                  Productos
                </Link>
                {hidden && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Soporte</h1>
                    <div>
                      <p className={styles.bold}>Atencion al cliente</p>
                      <p className={styles.bold}>Tutoriales</p>
                      <p className={styles.bold}>Postventa</p>
                      <p className={styles.text}>Red de Tecnicos</p>
                      <p>Repuestos</p>
                      <p>Certificados</p>
                      <p className={styles.bold}>Activacion de Garantias</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </ParentComponent>
          <ParentComponent name="soporte">
            {(hidden) => (
              <>
                <Link
                  href="/soporte"
                  name="soporte"
                  className={
                    pathname == "/soporte"
                      ? styles.navigationActive
                      : styles.navigation
                  }
                >
                  Soporte
                </Link>
                {hidden && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Soporte</h1>
                    <div>
                      <p className={styles.bold}>Atencion al cliente</p>
                      <p className={styles.bold}>Tutoriales</p>
                      <p className={styles.bold}>Postventa</p>
                      <p className={styles.text}>Red de Tecnicos</p>
                      <p>Repuestos</p>
                      <p>Certificados</p>
                      <p className={styles.bold}>Activacion de Garantias</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </ParentComponent>
         
          <Link
            href="/socios"
            className={
              pathname == "/socios"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            Socios
          </Link>
          <ParentComponent name="nosotros">
            {(hidden) => (
              <>
                <Link
                  href="/nosotros"
                  name="nosotros"
                  className={
                    pathname == "/nosotros"
                      ? styles.navigationActive
                      : styles.navigation
                  }
                >
                  Nosotros
                </Link>
                {hidden && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Soporte</h1>
                    <div>
                      <p className={styles.bold}>Atencion al cliente</p>
                      <p className={styles.bold}>Tutoriales</p>
                      <p className={styles.bold}>Postventa</p>
                      <p className={styles.text}>Red de Tecnicos</p>
                      <p>Repuestos</p>
                      <p>Certificados</p>
                      <p className={styles.bold}>Activacion de Garantias</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </ParentComponent>
          <Link
            href="/noticias"
            className={
              pathname == "/noticias"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            Noticias
          </Link>
        </div>

        <div className={styles.box3}>
          <div>
            <button className={styles.buttons}>
              <IoSearchSharp className={styles.icon} />
            </button>
            <button className={styles.buttons}>
              <GoMail className={styles.icon} />
            </button>
            <button className={styles.buttons}>
              <PiShoppingCart className={styles.icon} />
            </button>
          </div>
          <div className={styles.containLanguage}>
            <button className={styles.language}>ES</button>
            <button className={styles.language}>EN</button>
            <button className={styles.language}>PT</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
