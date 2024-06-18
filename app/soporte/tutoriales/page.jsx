"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "@/Components/Card/Card";
import styles from "./page.module.css";
import Image from "next/image";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
import axios from "axios";

const Page = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getModel")
      .then((response) => {
        setArray(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return loading ? (
    <p>cargando</p>
  ) : (
    <div className={styles.containers}>
      <div>
        <BannerTutorial />
      </div>
      <div className={styles.grid}>
        {array.map((item, index) => {
          const path = item.name.split(" ").join("");
          return (
            <Link
              href={`/soporte/tutoriales/${path}`}
              className={styles.links}
              key={index}
            >
              <div key={index} className={styles.cardContainer}>
                <Card
                  img={item.image}
                  title={item.name}
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

export default Page;
