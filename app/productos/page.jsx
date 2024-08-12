"use client";
import MapComponent from "@/Components/Map/Map";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>productos</h1>
      <div className={styles.box}>
        <Link href="/productos/allProducts" className={styles.box1}>
            <h2 className={styles.text}>Ver todos los productos</h2>
            <Image
              src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1723476875/Kretz-Practica/Icons/p2zuyyebuwx4b7aieqal.png"
              width={300}
              height={300}
              alt="balanza"
            />
        </Link>
        <Link href="/soporte/posventa"className={styles.box1}>
            <h2 className={styles.text}>Solicitar asesoramiento comercial</h2>
            <Image
              src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/xbj6vl90vyt0op22uitp.svg"
              width={180}
              height={180}
              alt="asesoramiento"
            />
        </Link>
      </div>
      <MapComponent />
    </div>
  );
};

export default page;
