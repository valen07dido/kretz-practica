import React from "react";
import Image from "next/image";
import styles from "./CardConoceMas.module.css";
import Link from "next/link";
import ButtonConoceMas from "../ButtonConoceMas/ButtonConoceMas";
const CardConoceMas = ({img, text}) => {
  return (
    <div className={styles.container}>
      <Image src={img} width={400} height={600} alt={text} />
      <div className={styles.container2}>
        <h1 className={styles.name}>{text}</h1>
        <Link href={`/productos/${text}`} className={styles.link}>
        <ButtonConoceMas />
        </Link>
      </div>
    </div>
  );
};

export default CardConoceMas;
