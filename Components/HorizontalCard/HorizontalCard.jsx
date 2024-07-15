import Image from "next/image";
import React from "react";
import styles from "./HorizontalCard.module.css"
const HorizontalCard = ({ img, title, text, orientation }) => {
  return (
    <div className={orientation==="D"?styles.containerD:styles.containerI}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <h2 className={styles.button}>{"Ver Más >"}</h2>
      </div>
      <Image src={img} width={550} height={417} alt={title}/>
    </div>
  );
};

export default HorizontalCard;
