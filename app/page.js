import CardConoceMas from "@/Components/CardConoceMas/CardConoceMas";
import styles from "./page.module.css";
import Carousel from "@/Components/Carousel/Carousel";
import img1 from "@/public/Balanza-Report-NX.png";

export default function Home() {

  const arr=[{
    img:img1,
    text:"Report"
  },
{
  img:"https://res.cloudinary.com/dpa8t14c2/image/upload/v1716421621/Kretz-Practica/v88xnomekrkhcvsnmayx.png",
  text:"Master"
}]
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Impulsa tu negocio</h1>
      </div>
      <div className={styles.carousel}>
        <div>
          <h1 className={styles.title2}>Conoce nuestras soluciones</h1>
        </div>
        <Carousel
          array={[
            {
              img: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
              title: "hola",
            },
            {
              img: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
              title: "hola",
            },
            {
              img: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
              title: "hola",
            },
          ]}
          className={styles.carouselcomp}
        />

      </div>
    <div className={styles.products}>
    {arr.map((item, index) => (
        <div key={index} className={styles.cardContainer}>
          <CardConoceMas img={item.img} text={item.text}/>
        </div>
      ))}
    </div>
    </main>
  );
}
