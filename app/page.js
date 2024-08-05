import CardConoceMas from "@/Components/CardConoceMas/CardConoceMas";
import styles from "./page.module.css";
import Carousel from "@/Components/Carousel/Carousel";
import img1 from "@/public/Balanza-Report-NX.png";
import itegra from "@/public/itegra.png";
import empresa from "../public/empresa.png";
import HorizontalCard from "@/Components/HorizontalCard/HorizontalCard";
import MapComponent from "@/Components/Map/Map";

export default function Home() {
  const arr = [
    {
      img: img1,
      text: "Report",
    },
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716421621/Kretz-Practica/v88xnomekrkhcvsnmayx.png",
      text: "Master",
    },
  ];
  const horizontalArr = [
    {
      img: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1722602500/Kretz-Practica/products/Pantallas/voiw1ujy4j2fnfmdjxbm.png",
      title: "Kioskos interactivos",
      text: "Contamos con terminales interactivas a la altura de cualquier necesidad: pantalla touch, lector de código de barras, impresora, posnet, etc.",
      orientation: "D",
    },
    {
      img: itegra,
      title: "Software",
      text: "Adaptable al software de gestión de cada negocio.Incluye software para el diseño de etiquetas. Permite obtener estadísticas y reportes.",
      orientation: "D",
    },
    {
      img: empresa,
      title: "Descubre el corazón de nuestra empresa.",
      text: "Donde la innovación cobra vida y cada día damos forma a la excelencia.",
      orientation: "I",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Impulsa tu negocio</h1>
      </div>
      <div>
        <h1 className={styles.title2}>Conocé nuestras soluciones</h1>
      </div>
      <div className={styles.carousel}>
        <Carousel className={styles.carouselcomp} />
      </div>
      <div className={styles.products}>
        {arr.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <CardConoceMas img={item.img} text={item.text} />
          </div>
        ))}
      </div>
      <div className={styles.products}>
        {horizontalArr.map((item, index) => (
          <div key={index}>
            <HorizontalCard
              img={item.img}
              text={item.text}
              title={item.title}
              orientation={item.orientation}
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          <h1 className={styles.title2}>Novedades</h1>
        </div>
        <div className={styles.carousel}>
          <Carousel className={styles.carouselcomp} />
        </div>
      </div>
      <div className={styles.products}>
        <MapComponent />
      </div>
    </main>
  );
}
