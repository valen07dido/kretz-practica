"use client";
import Card from "@/Components/Card/Card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css"
const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/api/getModel?t=${new Date().getTime()}`,
          {
            method: "GET",
            headers: {
              "Cache-Control": "no-cache", // Aunque esto no garantiza que el servidor no cacheará, lo intentamos.
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    <div className={styles.container}>
     {array.map((item, index) => {
                  return (
                    <Link
                      href={`/productos/${item.id}`}
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
  )
}

export default Page
