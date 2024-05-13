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

const NavBar = () => {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelToggle = (name) => {
    setActivePanel(name === activePanel ? null : name);
  };

  return (
    <div>
      <nav className={styles.container}>
        <Link href="/">
          <Image src={logo} className={styles.image} alt="logo" />
        </Link>
        <div className={styles.bar}>
          <div
            className={
              pathname == "/productos"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={() => handlePanelToggle("productos")}
            onMouseLeave={() => handlePanelToggle("productos")}
          >
            <Link className={styles.links} href="/productos">
              Productos
            </Link>
            {activePanel === "productos" && (
              <div className={styles.hidden}>
                <h1 className={styles.title}>Productos</h1>
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
          </div>
          <div
            className={
              pathname == "/soporte"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={() => handlePanelToggle("soporte")}
            onMouseLeave={() => handlePanelToggle("soporte")}
          >
            <Link className={styles.links} href="/soporte">
              Soporte
            </Link>
            {activePanel === "soporte" && (
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
          </div>
          <div
            className={
              pathname == "/socios"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            <Link className={styles.links} href="/socios">
              Socios
            </Link>
          </div>
          <div
            className={
              pathname == "/nosotros"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={() => handlePanelToggle("nosotros")}
            onMouseLeave={() => handlePanelToggle("nosotros")}
          >
            <Link className={styles.links} href="/nosotros">
              Nosotros
            </Link>
            {activePanel === "nosotros" && (
              <div className={styles.hidden}>
                <h1 className={styles.title}>Nosotros</h1>
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
          </div>
          <div
            className={
              pathname == "/socios"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            <Link
              href="/noticias"
              className={styles.links}
            >
              Noticias
            </Link>
          </div>
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
      <div></div>
    </div>
  );
};

export default NavBar;
