"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "@/Components/Card/Card";
import styles from "./page.module.css";
import loadingimg from "@/public/loading.svg";
import Image from "next/image";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
import NotFound from "@/Components/NotFound/NotFound";

const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/api/getModel?t=${new Date().getTime()}`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache', // Aunque esto no garantiza que el servidor no cacheará, lo intentamos.
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setArray(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className={styles.containers}>
      <div className={styles.banner}>
        <BannerTutorial />
      </div>
      {loading ? (
        <Image src={loadingimg} width={90} height={90} alt="loading" />
      ) : (
        <>
          {array.length === 0 ? (
            <NotFound />
          ) : (
            <div className={styles.grid}>
              {array.map((item, index) => {
                const path = item.name.split(" ").join("");
                return (
                  <Link
                    href={`/soporte/tutoriales/${path}`}
                    className={styles.links}
                    key={index}
                  >
                    <div className={styles.cardContainer}>
                      <Card
                        img={item.image[0]}
                        title={item.name}
                        className={styles.cartas}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
