import React from "react";
import Image from "next/image";
import styles from "./ButtonSupport.module.css";
const ButtonSupport = ({ icon, text }) => {
  console.log(icon)
  return (
    <div className={styles.button}>
      <Image
        src={icon}
        width={49.11}
        height={52}
        alt={text}
        className={styles.img}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ButtonSupport;
