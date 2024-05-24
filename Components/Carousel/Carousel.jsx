"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import Card from "@/Components/Card/Card";

export default function Carousel({array}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} className={styles.carousel}>
        {array.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <Card img={item.img} title={item.title} className={styles.cartas} />
          </div>
        ))}
      </Slider>
    </div>
  );
}