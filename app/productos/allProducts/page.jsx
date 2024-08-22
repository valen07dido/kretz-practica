"use client";
import Card from "@/Components/Card/Card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import NotFound from "@/Components/NotFound/NotFound";
import loadingimg from "@/public/loading.svg";
import Image from "next/image";

const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL || "";
  const [array, setArray] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const [totalItems, setTotalItems] = useState(0); 
  const itemsPerPage = 6; 

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `${url}/api/getModel?page=${page}&limit=${itemsPerPage}&t=${new Date().getTime()}`,
        {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );

      if (!response.ok) {
        throw new Error("La respuesta de la red no fue correcta");
      }

      const data = await response.json();
      console.log(data);
      setArray(data || []); 
      setTotalItems(data.length || 0); 
      setTotalPages(Math.ceil(data.length / itemsPerPage)); 
    } catch (error) {
      setError("Error al obtener los datos. Inténtalo de nuevo más tarde.");
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, url]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}>Nuestros productos</h1>
      {loading ? (
        <Image src={loadingimg} width={90} height={90} alt="loading" />
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : array.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className={styles.container}>
            {array.map((item) => (
              <Link
                href={`/productos/${item.id}`}
                className={styles.links}
                key={item.id} 
              >
                <div className={styles.cardContainer}>
                  <Card
                    img={item.image[0]}
                    title={item.name}
                    className={styles.cartas}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.pagination}>
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>
                Anterior
              </button>
            )}
            <span>Página {currentPage} de {totalPages}</span>
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)}>
                Siguiente
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
