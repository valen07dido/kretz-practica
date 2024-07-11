import Card from "@/Components/Card/Card";
import React from "react";
import styles from "./page.module.css"
const page = () => {
  const array = [
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442354/Kretz-Practica/products/rfvtmy4sp1k1ytokzpwg.jpg",
      title: "Cenit",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1720442018/Kretz-Practica/products/vkegpel3ezwabsqqaseh.jpg",
      title: "Gala",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1717002108/Kretz-Practica/products/g59t8c0c0l2041anhwzi.jpg",
      title: "Report NX Visor Bajo",
    },

  ];
  return (
    <div className={styles.container}>
      <h1>Todas las novedades a tu alcance</h1>
      <div>
        <p>Enterate primero, suscríbete a nuestro newsletter</p>
        <input type="text" className={styles.input}/>
        <button>Enviar</button>
      </div>
      <div className={styles.grid}>
        {array.map((element, index)=>{
            return(
                <Card img={element.img} title={element.title} key={index}/>
            )
        })

        }
      </div>
    </div>
  );
};

export default page;
