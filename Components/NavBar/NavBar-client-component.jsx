'use client';
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname=usePathname()
  console.log(pathname)
  return (
    <nav className={styles.container}>
      <Image src={logo} className={styles.image} />
      <div className={styles.bar}>
        <a href="/soluciones" className={pathname=="/soluciones"?styles.navigationActive:styles.navigation}>Soluciones</a>
        <a href="/mercado" className={pathname=="/mercado"?styles.navigationActive:styles.navigation}>Mercado</a>
        <a href="/soporte" className={pathname=="/soporte"?styles.navigationActive:styles.navigation}>Soporte</a>
        <a href="/distribuidores" className={pathname=="/distribuidores"?styles.navigationActive:styles.navigation}>Distribuidores</a>
        <a href="/nosotros" className={pathname=="/nosotros"?styles.navigationActive:styles.navigation}>Nosotros</a>
        <a href="/FaQs" className={pathname=="/FaQs"?styles.navigationActive:styles.navigation}>FAQs</a>
        <a href="/news" className={pathname=="/News"?styles.navigationActive:styles.navigation}>News</a>
        <button className={styles.products}>Productos</button>
      </div>

      <div className={styles.box3}>
        <div>
          <button className={styles.buttons}>
            <IoSearchSharp className={styles.icon} />
          </button>
          <button className={styles.buttons}>
            <FiUser className={styles.icon} />
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
