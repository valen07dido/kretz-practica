"use client";
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePanelToggle = (name) => {
    setActivePanel(name === activePanel ? null : name);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMobile) {
    return (
      <nav className={styles.containerGlobal}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={logo} className={styles.image} alt="logo" />
          </Link>
          <div className={styles.bar}>
            <Link className={styles.links} href="/productos">
              <div
                className={
                  pathname == "/productos"
                    ? styles.navigationActive
                    : styles.navigation
                }
                onMouseEnter={() => handlePanelToggle("productos")}
                onMouseLeave={() => handlePanelToggle("productos")}
              >
                Productos
                {activePanel === "productos" && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Productos</h1>
                    <div className={styles.menu}>
                      <div className={styles.boxText}>
                        <h4 className={styles.text}>Por categoría</h4>
                        <Link href="/" className={styles.bold}>
                          Balanzas
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Cajas registradoras
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Conector de datos
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Etiquetas electronicas
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Impresores
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Insumos y accesorios
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Lectores
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Terminales interactivas
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Verificadores de precio
                        </Link>
                      </div>
                      <div className={styles.boxText}>
                        <h4 className={styles.text}>Por soluciones</h4>
                        <Link href="/" className={styles.bold}>
                          Supermercados
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Comercios
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Industrias
                        </Link>
                        <Link href="/" className={styles.bold}>
                          Laboratorios
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link className={styles.links} href="/soporte">
              <div
                className={
                  pathname == "/soporte"
                    ? styles.navigationActive
                    : styles.navigation
                }
                onMouseEnter={() => handlePanelToggle("soporte")}
                onMouseLeave={() => handlePanelToggle("soporte")}
              >
                Soporte
                {activePanel === "soporte" && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Soporte</h1>
                    <div className={styles.boxText}>
                      <Link href="/" className={styles.bold}>
                        Atencion al cliente
                      </Link>
                      <Link href="/soporte/tutoriales" className={styles.bold}>
                        Tutoriales
                      </Link>
                      <Link href="/" className={styles.bold}>
                        Postventa
                      </Link>
                      <Link href="/" className={styles.text}>
                        Red de Tecnicos
                      </Link>
                      <Link href="/" className={styles.text}>
                        Repuestos
                      </Link>
                      <Link href="/" className={styles.text}>
                        Certificados
                      </Link>
                      <Link href="/" className={styles.bold}>
                        Activacion de Garantias
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link className={styles.links} href="/socios">
              <div
                className={
                  pathname == "/socios"
                    ? styles.navigationActive
                    : styles.navigation
                }
                onMouseEnter={() => handlePanelToggle("socios")}
                onMouseLeave={() => handlePanelToggle("socios")}
              >
                Socios
                {activePanel === "socios" && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Socios</h1>
                    <div className={styles.boxText}>
                      <Link href="/" className={styles.bold}>
                        Ingresar
                      </Link>
                      <Link href="/" className={styles.bold}>
                        Registrarse
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link className={styles.links} href="/nosotros">
              <div
                className={
                  pathname == "/nosotros"
                    ? styles.navigationActive
                    : styles.navigation
                }
                onMouseEnter={() => handlePanelToggle("nosotros")}
                onMouseLeave={() => handlePanelToggle("nosotros")}
              >
                Nosotros
                {activePanel === "nosotros" && (
                  <div className={styles.hidden}>
                    <h1 className={styles.title}>Nosotros</h1>
                    <div className={styles.boxText}>
                      <Link href="/" className={styles.bold}>
                        Balance social
                      </Link>
                      <Link href="/" className={styles.bold}>
                        Compliance
                      </Link>
                      <Link href="/" className={styles.bold}>
                        Trabajá con nosotros
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link href="/noticias" className={styles.links}>
              <div
                className={
                  pathname == "/noticias"
                    ? styles.navigationActive
                    : styles.navigation
                }
              >
                Noticias
              </div>
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
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.containerGlobal}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={logo} className={styles.image} alt="logo" />
          </Link>
          <div>
            <button className={styles.buttons}>
              <IoSearchSharp className={styles.icon} />
            </button>
            <button className={styles.buttons}>
              <IoIosMenu className={styles.icon} />
            </button>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
