'use client';
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname=usePathname()
  console.log(pathname)
  return (
    <nav className={styles.container}>
      <Image src={logo} className={styles.image} />
      <div className={styles.bar}>
        <a href="/productos" className={pathname=="/productos"?styles.navigationActive:styles.navigation}>Productos</a>
        <a href="/soporte" className={pathname=="/soporte"?styles.navigationActive:styles.navigation}>Soporte</a>
        <a href="/socios" className={pathname=="/socios"?styles.navigationActive:styles.navigation}>Socios</a>
        <a href="/nosotros" className={pathname=="/nosotros"?styles.navigationActive:styles.navigation}>Nosotros</a>
        <a href="/noticias" className={pathname=="/noticias"?styles.navigationActive:styles.navigation}>Noticias</a>
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
  );
};

export default NavBar;
