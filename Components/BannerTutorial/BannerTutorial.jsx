import React from "react";
import styles from "./BannerTutorial.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BannerTutorial = () => {
  const pathname = usePathname();

  const pathParts = pathname.split("/").slice(3);

  const tutorialName = pathParts[0] ? pathParts[0].replace(/%20/g, " ") : "";
  const tutorialStep = pathParts[1] || "";

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Tutoriales</h1>
        <div className={styles.box}>
          <div className={styles.inbox}>
            <Link href="/soporte/tutoriales" className={styles.subtitle}>
              Videos Tutoriales
            </Link>
            {tutorialName && (
              <Link
                href={`/soporte/tutoriales/${tutorialName}`}
                className={styles.subtitle2}
              >{`>  ${tutorialName}`}</Link>
            )}
            {tutorialStep && (
              <Link
                href={`/soporte/tutoriales/${tutorialName}/${tutorialStep}`}
                className={styles.subtitle2}
              >{`>  ${tutorialStep}`}</Link>
            )}
          </div>
          <Image
            src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1716838596/Kretz-Practica/Icons/ps2dgq7dcodoflgz1ugg.svg"
            alt="camera"
            width={47}
            height={31}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTutorial;
