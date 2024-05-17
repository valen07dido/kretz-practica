import React from "react";
import Image from "next/image";
import img from "@/public/Balanza-Report-NX.png";
import styles from "./CardConoceMas.module.css";
import ButtonConoceMas from "../ButtonConoceMas/ButtonConoceMas";
const CardConoceMas = () => {
  return (
    <div className={styles.container}>
      <Image src={img} width={517} />
      <div className={styles.container2}>
        <h1>Report</h1>
        <ButtonConoceMas />
      </div>
    </div>
  );
};

export default CardConoceMas;
