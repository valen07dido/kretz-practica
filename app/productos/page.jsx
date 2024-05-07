"use client";
import Card from "@/Components/Card/Card";
import imagePrueba from "@/public/Report-NX-Visor-Bajo.jpg";
import React from "react";
import icon from "@/public/Icon-prueba.png";
import ButtonSupport from "@/Components/ButtonProducts/ButtonProducts";
import FaQs from "@/Components/FaQs/FaQs";
const page = () => {
  return (
    <div>
      <Card img={imagePrueba} title={"Soporte"} />
      <ButtonSupport icon={icon} text={"Posventa"} />
    </div>
  );
};

export default page;
