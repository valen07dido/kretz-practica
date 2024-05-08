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
  const [timeoutId, setTimeoutId] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState("");
  const handleHiddentrue = (e) => {
    setName(e);
    console.log(name);
    setHidden(true);
    console.log(hidden);
  };
  const handleHiddenfalse = (e) => {
    setName(e);
    console.log(name);
    setHidden(false);
    console.log(hidden);
  };
  const handleMouseEnter = (e) => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => handleHiddentrue(e.target.name), 100));
  };

  const handleMouseLeave = (e) => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => handleHiddenfalse(e.target.name), 100));
  };

  return (
    <div>
      <nav className={styles.container}>
        <Image src={logo} className={styles.image} />
        <div className={styles.bar}>
          <Link
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
          </Link>
          <Link
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
          </Link>
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
          <Link
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
          </Link>
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
      <div>
        {hidden && name === "soporte" ? <h1>soporte</h1> : null}
        {hidden && name === "productos" ? <h1>productos</h1> : null}
        {hidden && name === "nosotros" ? <h1>nosotros</h1> : null}
      </div>
    </div>
  );
};

export default NavBar;
