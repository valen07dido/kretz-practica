import CardVerMas from "@/Components/Card-VerMas/CardVerMas";
import Card from "@/Components/Card/Card";
import imagePrueba from "@/public/Report-NX-Visor-Bajo.jpg";
import React from "react";
import ImagePrueba2 from "@/public/VerMas.png";
import icon from "@/public/Icon-prueba.png";
import ButtonSupport from "@/Components/ButtonSupport/ButtonSupport";
const page = () => {
  return (
    <div>
      <Card img={imagePrueba} title={"Soporte"} />
      <CardVerMas img={ImagePrueba2} title={"no se"} />
      <ButtonSupport icon={icon} text={"Posventa"} />
    </div>
  );
};

export default page;
