"use client";
import React from "react";
import Image from "next/image";
import styles from "./Card.module.css"
const Card = ({img,title}) => {
  return (
    <div className={styles.container}>
      <Image src={img} width={372} height={357} className={styles.image} alt={title}/>
      <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.button}>{"Ver Mas >"}</h3>
      </div>
    </div>
  );
};

export default Card;
