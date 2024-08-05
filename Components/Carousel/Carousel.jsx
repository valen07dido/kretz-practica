"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import Card from "@/Components/Card/Card";
import Image from "next/image";
import imageLoading from "@/public/loading.svg"

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
              "Cache-Control": "no-cache",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const filteredData = data.filter(item => item.carrousel);
        setArray(filteredData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className={styles.carouselContainer}>
          {loading ? (
      <Image src={imageLoading} width={50} height={50}/>
    ) : (
      <Slider {...settings} className={styles.carousel}>
        {array.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <Card
              img={item.image[0]}
              title={item.name}
              className={styles.cartas}
            />
          </div>
        ))}
      </Slider>)}
    </div>
  );
}
