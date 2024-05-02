"use client";
import React from "react";
import styles from "./CardVerMas.module.css"
import Image from "next/image";
const CardVerMas = ({img,title}) => {
  return (
    <div className={styles.container}>
      <Image src={img} width={265} height={229.11} className={styles.image} alt={title}/>
      <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.button}>{"Ver Mas >"}</h3>
      </div>
    </div>
  );
};

export default CardVerMas;
