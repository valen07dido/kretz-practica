"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import loadingimg from "@/public/loading.svg";
import BannerTutorial from "@/Components/BannerTutorial/BannerTutorial";
import Image from "next/image";
import NotFound from "@/Components/NotFound/NotFound";
import styles from "./page.module.css"
const Page = () => {
  const id = usePathname().split("/").pop();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const videoUrls = {
        1: "https://www.youtube.com/embed/tgbNymZ7vqY",
        2: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        3: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      };

      setVideoUrl(videoUrls[id]);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <Image src={loadingimg} width={90} height={90} />;
  }

  if (!videoUrl) {
    return (
      <div>
        <BannerTutorial />
        <NotFound/>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BannerTutorial />
      <main>
        <iframe
          width="888"
          height="511"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.player}
        ></iframe>
      </main>
    </div>
  );
};

export default Page;
