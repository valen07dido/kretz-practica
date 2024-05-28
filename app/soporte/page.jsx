import React from "react";
import styles from "./page.module.css";
import ButtonSupport from "@/Components/ButtonSupport/ButtonSupport";
const Page = () => {
  const array = [
    {
      icon: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/mmtb1rgk9ymmrhpywfsj.svg",
      text: "Garantias",
    },
    {
      icon: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/ctuajnfrw4sgijgwhpoc.svg",
      text: "Atencion al cliente",
    },
    {
      icon: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/sykvzci3ymz8s4iqbn1r.svg",
      text: "Tutoriales",
    },
    {
      icon: "https://res.cloudinary.com/dpa8t14c2/image/upload/v1716833891/Kretz-Practica/Icons/xbj6vl90vyt0op22uitp.svg",
      text: "Posventa",
    },
  ];
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Soporte</h1>
      </div>
      <div className={styles.buttons}>
        {array.map((item, index) => {
          return <ButtonSupport icon={item.icon} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Page;
