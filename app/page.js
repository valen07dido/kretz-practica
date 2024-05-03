import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/public/image-home.png"
import Carousel from "@/Components/Carousel/Carousel";
export default function Home() {
  
  return (
    <main className={styles.main}>
      <Image src={Banner}  height={645} alt="Banner" className={styles.banner}/>
      <h1 className={styles.title}>Impulsa tu negocio</h1>
    <div className={styles.carousel}>
    <Carousel
        array={[
          {
            img: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
            title: "hola",
          },
          {
            img: "https://ethic.es/wp-content/uploads/20  23/03/imagen.jpg",
            title: "hola",
          },
          {
            img: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
            title: "hola",
          },
        ]}
      />
    </div>
    </main>
  );
}
