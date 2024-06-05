"use client";
import React from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
import Image from "next/image";
const Page = () => {
  const array = [
    {
      image: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/pnqapccjdofldqjxyaog.svg",
      url: "conexionConM10",
    },
    {
      image: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/jsxhjzohx6bglv9lzb5g.svg",
      url: "altaFiscal",
    },
    {
      image: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603584/Kretz-Practica/products/numa%20ng/drgsulwvrtfrgciefvow.svg",
      url: "descargaDeReportes",
    },
    {
      image: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603583/Kretz-Practica/products/numa%20ng/dcs5vcpkayhe2gsjuv4u.svg",
      url: "crearArticulos",
    },
    {
      image: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/ibqlsg5fhk7zch0miyjy.svg",
      url: "reportesAUnBoton",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603586/Kretz-Practica/products/numa%20ng/snyttb0hqptgmqsq56y0.svg",
      url: "numa",
    },
  ];
  const name = usePathname();
  const title = name.split("/").pop();
  return (
    <div className={styles.container}>
      <BannerTutorial path={title} />
      <div className={styles.grid}>
        {array.map((item,index)=>{
          return(
            <Image src={item.image} width={400} height={200}/>
          )
        })}
      </div>
    </div>
  );
};

export default Page;
