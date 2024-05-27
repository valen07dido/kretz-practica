import Link from "next/link";
import React from "react";
import Card from "@/Components/Card/Card";
import styles from "./page.module.css";
import Image from "next/image";
const page = () => {
  const array = [
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716837155/Kretz-Practica/products/tvvexugzppwfguu3fd0f.svg",
      title: "Numa NG",
    },
  ];
  return (
    <div className={styles.containers}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tutoriales</h1>
        <div className={styles.box}>
          <p className={styles.subtitle}>
            <Link href="/soporte/tutoriales/numaNG" className={styles.link}>
              Video Tutoriales
            </Link>
            {" > Numa NG"}
          </p>
          <Image
            src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716838596/Kretz-Practica/Icons/ps2dgq7dcodoflgz1ugg.svg"
            alt="camera"
            width={47}
            height={31}
          />
        </div>
      </div>
      <div className={styles.grid}>
        {array.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <Card img={item.img} title={item.title} className={styles.cartas} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
