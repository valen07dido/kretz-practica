import React from "react";
import styles from "./BannerTutorial.module.css"
import Image from "next/image";
const BannerTutorial = ({path}) => {

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Tutoriales</h1>
        <div className={styles.box}>
          <p className={styles.subtitle}>{!path?"Video tutoriales":`Video tutoriales > ${path}`}</p>
          <Image
            src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716838596/Kretz-Practica/Icons/ps2dgq7dcodoflgz1ugg.svg"
            alt="camera"
            width={47}
            height={31}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTutorial;
