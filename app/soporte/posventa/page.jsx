import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1 className={styles.title1}>Posventa</h1>
        <Image
          src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/ctuajnfrw4sgijgwhpoc.svg"
          width={46}
          height={49}
        />
      </div>
      <div className={styles.box2}>
        <div className={styles.chest1}>
          <h3>
            Hacer productos para que ayuden a las personas es un concepto que
            empieza mucho antes del producto mismo y que no termina.
          </h3>
          <p>
            Entender este pensamiento es prioritario a la hora de definir los
            alcances del compromiso con la gente.
          </p>
          <p>
            En ese sentido, Kretz desarrolló un servicio de posventa que abarca
            más de setenta servicios técnicos en todo el país, y otro importante
            número en los países donde exporta sus productos.
          </p>
          <p>
            Para dar respuesta en tiempo y forma, porque la tecnología no es
            perfecta y la idea es brindar soluciones.
          </p>
        </div>
        <div className={styles.chest2}>
          <h1>70</h1>
          <p>Servicios Técnicos en todo el pais</p>
          <p>También disponible en países de exportación</p>
          <hr/>
          <p>Para mayor información contáctese con nosotros</p>
          <h2>0341 492 7400</h2>
          <p>líneas rotativas</p>
        </div>
      </div>
    </div>
  );
};

export default page;
