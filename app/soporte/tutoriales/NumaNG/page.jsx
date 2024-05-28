"use client"
import React from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
const page = () => {
  const name=usePathname()
  const title=name.split("/").pop()
  return (
    <div className={styles.container}>
      <BannerTutorial path={title}/>
    </div>
  );
};

export default page;
