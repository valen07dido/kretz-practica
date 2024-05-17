import CardConoceMas from "@/Components/CardConoceMas/CardConoceMas";
import styles from "./page.module.css";
import Carousel from "@/Components/Carousel/Carousel";
export default function Home() {
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
    <div>
      <CardConoceMas/>
    </div>
    </main>
  );
}
