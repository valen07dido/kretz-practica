"use client";
import MapComponent from "@/Components/Map/Map";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div>
      <Link href={"/productos/prueba"}>clickea</Link>
      <MapComponent/>
    </div>
  );
};

export default page;
