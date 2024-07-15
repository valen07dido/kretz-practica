import Card from "@/Components/Card/Card";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
const page = () => {
  const array = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      id: 9,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      id: 10,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todas las novedades a tu alcance</h1>
      <div className={styles.containinput}>
        <p className={styles.text}>
          Enterate primero, suscríbete a nuestro newsletter
        </p>
        <div className={styles.containinput2}>
          <input type="text" className={styles.input} placeholder="E-mail*" />
          <button className={styles.button}>Enviar</button>
        </div>
      </div>
      <div className={styles.grid}>
        {array.map((element, index) => {
          return (
            <Link href={`/nosotros/${element.id}`}>
              <Card
                img={element.img}
                title={element.title}
                key={index}
                className={styles.cards}
              />
              ;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
