"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css"; // Asegúrate de crear el archivo CSS correspondiente
import Image from "next/image";
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
const page = () => {
  const router = usePathname();
  const id = parseInt(router.split("/").pop());

  const product = array.find((product) => product.id === id);

  const prevProduct = array.find((product) => product.id === id - 1) || null;
  const nextProduct = array.find((product) => product.id === id + 1) || null;

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <Image
        src={product.img}
        alt={product.title}
        className={styles.image}
        width={1192}
        height={389}
      />
      <div className={styles.descriptionCont}>
        <p className={styles.description}>
          A lo largo de todos estos años hemos preservado los mismos valores que
          nos impulsaron en el comienzo, una filosofía de trabajo sustentada en
          el entusiasmo por el trabajo en equipo, la devoción por la excelencia,
          el compromiso con el cliente, el respeto por el medio ambiente y la
          pasión por el desarrollo de nuevas soluciones.
        </p>

        <p className={styles.description}>
          A lo largo de todos estos años hemos preservado los mismos valores que
          nos impulsaron en el comienzo, una filosofía de trabajo sustentada en
          el entusiasmo por el trabajo en equipo, la devoción por la excelencia,
          el compromiso con el cliente, el respeto por el medio ambiente y la
          pasión por el desarrollo de nuevas soluciones.
        </p>
      </div>
      <div className={styles.navigation}>
        {prevProduct && (
          <Link href={`/nosotros/${prevProduct.id}`} className={styles.link}>
            <p className={styles.navButton}>{` < ${prevProduct.title}`}</p>
          </Link>
        )}
        {nextProduct && (
          <Link href={`/nosotros/${nextProduct.id}`} className={styles.link}>
            <p className={styles.navButton}>{`${nextProduct.title} >`}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
