import React from "react";
import Image from "next/image";
import styles from "./CardConoceMas.module.css";
import ButtonConoceMas from "../ButtonConoceMas/ButtonConoceMas";
const CardConoceMas = ({img, text}) => {
  return (
    <div className={styles.container}>
      <Image src={img} width={580} height={769} />
      <div className={styles.container2}>
        <h1 className={styles.name}>{text}</h1>
        <ButtonConoceMas />
      </div>
    </div>
  );
};

export default CardConoceMas;
