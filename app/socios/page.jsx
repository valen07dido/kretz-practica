"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Page = () => {
  const [focus, setFocus] = useState({});

  const handleFocus = (name) => {
    setFocus((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name) => {
    setFocus((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <div className={styles.container}>
      <h1>¿Querés ser distribuidor Kretz?</h1>
      <h3>Completa el siguiente formulario</h3>
      <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="Nombre y apellido"
            placeholder=" "
            required
            className={styles.inputs}
            onFocus={() => handleFocus("nombre")}
            onBlur={() => handleBlur("nombre")}
          />
          <label className={`${styles.label} ${focus.nombre ? styles.focused : ""}`}>Nombre y apellido*</label>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="E-mail"
            placeholder=" "
            required
            className={styles.inputs}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
          />
          <label className={`${styles.label} ${focus.email ? styles.focused : ""}`}>E-mail*</label>
        </div>
        <div className={styles.box1}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="Direccion"
              placeholder=" "
              required
              className={styles.inputs1}
              onFocus={() => handleFocus("direccion")}
              onBlur={() => handleBlur("direccion")}
            />
            <label className={`${styles.label} ${focus.direccion ? styles.focused : ""}`}>Direccion</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="Localidad"
              placeholder=" "
              required
              className={styles.inputs4}
              onFocus={() => handleFocus("localidad")}
              onBlur={() => handleBlur("localidad")}
            />
            <label className={`${styles.label} ${focus.localidad ? styles.focused : ""}`}>Localidad</label>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="Provincia"
              placeholder=" "
              required
              className={styles.inputs3}
              onFocus={() => handleFocus("provincia")}
              onBlur={() => handleBlur("provincia")}
            />
            <label className={`${styles.label} ${focus.provincia ? styles.focused : ""}`}>Provincia</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="Telefono"
              placeholder=" "
              required
              className={styles.inputs3}
              onFocus={() => handleFocus("telefono")}
              onBlur={() => handleBlur("telefono")}
            />
            <label className={`${styles.label} ${focus.telefono ? styles.focused : ""}`}>Telefono</label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            name="Consulta"
            placeholder=" "
            className={styles.inputs}
            onFocus={() => handleFocus("consulta")}
            onBlur={() => handleBlur("consulta")}
          />
          <label className={`${styles.label} ${focus.consulta ? styles.focused : ""}`}>Consulta</label>
        </div>
        <button className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Page;
