"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css'; // Asegúrate de crear el archivo CSS correspondiente
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
  const title= router.split("/").pop()
  // Encuentra el producto actual basado en el título
  const currentProductIndex = array.findIndex((product) => product.title === title);
  const product = array[currentProductIndex];

  // Encuentra el producto anterior y siguiente
  const prevProduct = array[currentProductIndex - 1] || null;
  const nextProduct = array[currentProductIndex + 1] || null;

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.container}>
      <img src={product.img} alt={product.title} className={styles.image} />
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.description}>Descripción del producto...</p>
      
      <div className={styles.navigation}>
        {prevProduct && (
          <Link href={`/nosotros/${prevProduct.title}`}>
            <a className={styles.navButton}>Anterior: {prevProduct.title}</a>
          </Link>
        )}
        {nextProduct && (
          <Link href={`/nosotros/${nextProduct.title}`}>
            <a className={styles.navButton}>Siguiente: {nextProduct.title}</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
