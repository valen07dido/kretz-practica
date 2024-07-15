"use client";
import React from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  const array = [
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/pnqapccjdofldqjxyaog.svg",
      id: "conexionConM10",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/jsxhjzohx6bglv9lzb5g.svg",
      id: "altaFiscal",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603584/Kretz-Practica/products/numa%20ng/drgsulwvrtfrgciefvow.svg",
      id: "descargaDeReportes",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603583/Kretz-Practica/products/numa%20ng/dcs5vcpkayhe2gsjuv4u.svg",
      id: "crearArticulos",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603582/Kretz-Practica/products/numa%20ng/ibqlsg5fhk7zch0miyjy.svg",
      id: "reportesAUnBoton",
    },
    {
      image:
        "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717603586/Kretz-Practica/products/numa%20ng/snyttb0hqptgmqsq56y0.svg",
      id: "numa",
    },
  ];
  const name = usePathname();
  const model = name.split("/").pop();
  return (
    <div className={styles.container}>
      <BannerTutorial />
      <div className={styles.grid}>
        {array.map((item, index) => {
          return (
            <Link href={`${model}/${item.id}`} key={index}>
              <Image src={item.image} width={400} height={200} alt={item.id}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
