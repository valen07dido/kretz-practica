"use client";
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useState } from "react";
const NavBar = () => {
  const pathname = usePathname();
  const [timeoutId, setTimeoutId] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState("");
  const handleHidden = (e) => {
    setName(e);
    console.log(name);
    setHidden(!hidden);
    console.log(hidden);
  };
  const handleMouseEnter = (e) => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => handleHidden(e.target.name), 100));
  };

  const handleMouseLeave = (e) => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => handleHidden(e.target.name), 100));
  };

  return (
    <div>
      <nav className={styles.container}>
        <Image src={logo} className={styles.image} />
        <div className={styles.bar}>
          <a
            href="/productos"
            name="productos"
            className={
              pathname == "/productos"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Productos
          </a>
          <a
            href="/soporte"
            name="soporte"
            className={
              pathname == "/soporte"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Soporte
          </a>
          <a
            href="/socios"
            className={
              pathname == "/socios"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            Socios
          </a>
          <a
            href="/nosotros"
            name="nosotros"
            className={
              pathname == "/nosotros"
                ? styles.navigationActive
                : styles.navigation
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Nosotros
          </a>
          <a
            href="/noticias"
            className={
              pathname == "/noticias"
                ? styles.navigationActive
                : styles.navigation
            }
          >
            Noticias
          </a>
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
      <div>
        {hidden && name === "soporte" ? <h1>soporte</h1> : null}
        {hidden && name === "productos" ? <h1>productos</h1> : null}
        {hidden && name === "nosotros" ? <h1>nosotros</h1> : null}
      </div>
    </div>
  );
};

export default NavBar;
