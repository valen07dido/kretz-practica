import React from "react";
import styles from "./ButtonConoceMas.module.css";
import { RiAddFill } from "react-icons/ri";

const ButtonConoceMas = () => {
  return (
    <div className={styles.container}>
      <p className={styles.conoce}>conocé más</p>
      <div className={styles.buttoncont}>
        <RiAddFill className={styles.buttontext}/>
      </div>
    </div>
  );
};

export default ButtonConoceMas;
