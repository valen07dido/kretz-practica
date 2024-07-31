"use client";
import MapComponent from "@/Components/Map/Map";
import Link from "next/link";
import styles from "./page.module.css"
import React from "react";
const page = () => {
  return (
    <div>
      <h1 className={styles.title}>
          productos
      </h1>
      <MapComponent/>
    </div>
  );
};

export default page;
