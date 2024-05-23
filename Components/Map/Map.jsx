import Image from "next/image";
import React from "react";
import map from "@/public/mapa.png";
import styles from "./Map.module.css";
const MapComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Mercados</h1>
      <Image src={map} width={1200}/>
      <div className={styles.box1}>
        <h3 className={styles.title2}>
          La empresa opera regularmente en los siguientes países:
        </h3>
        <div className={styles.box2}>
          <div className={styles.chest1}>
            <p className={styles.countries}>Arabia Saudita</p>
            <p className={styles.countries}>Brasil</p>
            <p className={styles.countries}>Bolivia</p>
            <p className={styles.countries}>Chile</p>
          </div>
          <div className={styles.chest2}>
            <p className={styles.countries}>Colombia</p>
            <p className={styles.countries}>Costa Rica</p>
            <p className={styles.countries}>Ecuador</p>
            <p className={styles.countries}>Estados Unidos</p>
          </div>
          <div className={styles.chest3}>
            <p className={styles.countries}>Ghana</p>
            <p className={styles.countries}>Guatemala</p>
            <p className={styles.countries}>Líbano</p>
            <p className={styles.countries}>México</p>
          </div>
          <div className={styles.chest4}>
            <p className={styles.countries}>Panamá</p>
            <p className={styles.countries}>Paraguay</p>
            <p className={styles.countries}>Perú</p>
            <p className={styles.countries}>Uruguay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
