import React from "react";
import Image from "next/image";
import error from "@/public/error.png";
import styles from "./NotFound.module.css"
const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <Image src={error} width={300} height={300} />
      <p className={styles.notfoundText}>ERROR NO SE ECUENTRAN DATOS...</p>
    </div>
  );
};

export default NotFound;
