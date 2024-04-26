import Image from "next/image";
import styles from "@/Components/NavBar/NavBar.module.css";
import logo from "@/public/logo-header.png";
import { IoSearchSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Image src={logo} className={styles.image} />
      <div className={styles.bar}>
        <p className={styles.navigation}>Soluciones</p>
        <p className={styles.navigation}>Mercado</p>
        <p className={styles.navigation}>Soporte</p>
        <p className={styles.navigation}>Distribuidores</p>
        <p className={styles.navigation}>Nosotros</p>
        <p className={styles.navigation}>FAQs</p>
        <p className={styles.navigation}>News</p>
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
