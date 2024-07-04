"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import SelectPosventa from "@/Components/SelectPosventa/SelectPosventa";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {isLoaded && (
        <div className={styles.container}>
          <div className={styles.box1}>
            <h1 className={styles.title1}>Posventa</h1>
            <Image
              src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/ctuajnfrw4sgijgwhpoc.svg"
              width={46}
              height={49}
              className={styles.img}
            />
          </div>
          <div className={styles.box2}>
            <div className={styles.chest1}>
              <h3 className={styles.textBold}>
                Hacer productos para que ayuden a las personas es un concepto
                que empieza mucho antes del producto mismo y que no termina.
              </h3>
              <p className={styles.text}>
                Entender este pensamiento es prioritario a la hora de definir
                los alcances del compromiso con la gente.
              </p>
              <p className={styles.text}>
                En ese sentido, Kretz desarrolló un servicio de posventa que
                abarca más de setenta servicios técnicos en todo el país, y otro
                importante número en los países donde exporta sus productos.
              </p>
              <p className={styles.text}>
                Para dar respuesta en tiempo y forma, porque la tecnología no es
                perfecta y la idea es brindar soluciones.
              </p>
            </div>
            <div className={styles.chest2}>
              <div className={styles.services}>
                <h1 className={styles.serviceNumber}>70</h1>
                <p className={styles.serviceText}>
                  Servicios Técnicos en todo el país
                </p>
              </div>
              <p className={styles.text2}>
                También disponible en países de exportación
              </p>
              <hr className={styles.line} />
              <p className={styles.text2}>
                Para mayor información contáctese con nosotros
              </p>
              <h2 className={styles.number}>0341 492 7400</h2>
              <p className={styles.text2}>líneas rotativas</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.chest3}>
        <SelectPosventa />
        <SelectPosventa />
        <Link href="mailto:service1@kretz.com.ar" className={styles.mail}>
          posventa@kretz.com.ar
        </Link>
      </div>
    </div>
  );
};

export default Page;
