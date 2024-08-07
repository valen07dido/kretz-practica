import React from "react";
import styles from "./Map.module.css";
import MapChart from "../MapInteractive/MapInteractive";
const MapComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapcontainer}>
        <h1 className={styles.title}>Nuestros Mercados</h1>
        <div className={styles.map}>
          <MapChart />
        </div>
      </div>
      <div className={styles.box1}>
        <h3 className={styles.title2}>
          La empresa opera regularmente en los siguientes países:
        </h3>
        <div className={styles.box3}>
          <div className={styles.box2}>
            <div>
              <p className={styles.countries}>Arabia Saudita</p>
              <p className={styles.countries}>Brasil</p>
              <p className={styles.countries}>Bolivia</p>
              <p className={styles.countries}>Chile</p>
            </div>
            <div>
              <p className={styles.countries}>Colombia</p>
              <p className={styles.countries}>Costa Rica</p>
              <p className={styles.countries}>Ecuador</p>
              <p className={styles.countries}>Estados Unidos</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div>
              <p className={styles.countries}>Ghana</p>
              <p className={styles.countries}>Guatemala</p>
              <p className={styles.countries}>Líbano</p>
              <p className={styles.countries}>México</p>
            </div>
            <div>
              <p className={styles.countries}>Panamá</p>
              <p className={styles.countries}>Paraguay</p>
              <p className={styles.countries}>Perú</p>
              <p className={styles.countries}>Uruguay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
