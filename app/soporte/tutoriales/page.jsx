"use client";
import Link from "next/link";
import React from "react";
import Card from "@/Components/Card/Card";
import styles from "./page.module.css";
import Image from "next/image";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";

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
      title: "Report NX",
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
      <div>
        <BannerTutorial/>
      </div>
      <div className={styles.grid}>
        {array.map((item, index) => {
          const path = item.title.split(" ").join("");
          return (
            <Link href={`/soporte/tutoriales/${path}`} className={styles.links} key={index}>
              <div key={index} className={styles.cardContainer}>
                <Card
                  img={item.img}
                  title={item.title}
                  className={styles.cartas}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
