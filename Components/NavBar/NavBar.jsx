import React from "react";
import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Image src={logo} className={styles.image}/>
      <div  className={styles.bar}>
      <p>Soluciones</p>
      <p>Mercado</p>
      <p>Soporte</p>
      <p>Distribuidores</p>
      <p>Nosotros</p>
      <p>FAQs</p>
      <p>News</p>
      </div>

      <button>Productos</button>
      <div>
        <button>logo lupa</button>
        <button>icono user</button>
        <button>user</button>
      </div>
      <div>
        <button className={styles.language}>ES</button>
        <button className={styles.language}>EN</button>
        <button className={styles.language}>PT</button>
      </div>
    </nav>
  );
};

export default NavBar;
