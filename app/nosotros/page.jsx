import MapComponent from "@/Components/Map/Map";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>60 años impulsando tu negocio</h1>
        <p className={styles.text}>
          Somos una empresa dedicada al diseño, producción y venta de soluciones
          tecnológicas para el comercio y la industria.
        </p>
      </div>
      <Image
        src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1721085117/Kretz-Practica/products/verificador%20de%20precios/p8hopqvcv5pn5gzeh9ph.svg"
        width={1100}
        height={622}
        alt="verificador de precios"
      />
      <h1 className={styles.title}>Integridad y Protagonismo</h1>
      <div className={styles.box2}>
        <h2 className={styles.subtitles}>Misión</h2>
        <p className={styles.subtext}>
          Ayudar a nuestros clientes en la operación y control de sus negocios.
        </p>
        <hr className={styles.line} />
        <h2 className={styles.subtitles}>Visión</h2>
        <p className={styles.subtext}>
          Ser reconocidos internacionalmente por diseñar soluciones tecnológicas
          innovadoras sustentadas en la excelencia de nuestra gente.
        </p>
        <hr className={styles.line} />
        <h2 className={styles.subtitles}>Valores</h2>
        <p className={styles.subtext}>Integridad y Protagonismo.</p>
      </div>
      <br />
      <br />
      <h1 className={styles.title}>Mas de 60 años de experiencia</h1>
      <Image
        src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1721085486/Kretz-Practica/logos/rrg5tao1lji9r4kgvsvy.svg"
        height={494}
        width={1100}
      />
      <div className={styles.box3}>
        <div className={styles.chest1}>
          <div className={styles.subchest}>
            <h2 className={styles.subtitles2}>Una empresa Lider</h2>
            <p className={styles.text2}>
              Posicionadonos como la empresa líder en el desarrollo y
              comercialización de balanzas electrónicas de la Argentina.
            </p>
            <p className={styles.text2}>
              En los últimos años diversificamos la oferta de productos con el
              desarrollo de controladores fiscales y soluciones para el punto de
              venta.
            </p>
          </div>
        </div>
        <div className={styles.chest2}>
          <div className={styles.subchest}>
            <h2 className={styles.subtitles3}>El festejo también fue Global</h2>
            <Link href="/nosotros" className={styles.button1}>
              MIralo acá
            </Link>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Tenemos un pacto y es global</h1>
      <div className={styles.containImg}>
        <Image
          src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1721085868/Kretz-Practica/additional/oenhxasu7gu0crftndgs.svg"
          width={800}
          height={200}
          alt="United Nations Global Compact"
        />
      </div>
      <div className={styles.box3}>
        <div className={styles.chest1}>
          <div className={styles.containerNations}>
            <h2 className={styles.NationsTitle}>
              Adherimos desde 2007 al Pacto Global de Naciones Unidas.
            </h2>
            <p className={styles.text2}>
              Fuimos elegidos por el PNUD como caso de estudio en la primera
              edición de la publicación “Aportes para el Desarrollo Humano en
              Argentina”.
            </p>
          </div>
        </div>
        <div className={styles.chest3}>
          <h2 className={styles.balance}>Balance Social 2023</h2>
          <button className={styles.buttonDownload}>Descargar</button>
        </div>
      </div>
      <Image
        src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1721086142/Kretz-Practica/additional/qlkxg535oqkvnrqozhma.svg"
        width={1100}
        height={900}
        alt="showroom"
      />
      <h1 className={styles.titlePosventa}>
        Calidad de Producto y Soporte Posventa
      </h1>
      <div className={styles.containerPosventa}>
        <h3 className={styles.posventaSubtitle}>
          Los pilares de Calidad de Producto y Soporte Post Venta de excelencia
          siguen siendo las directrices de la empresa en relación con nuestros
          clientes.
        </h3>
        <p className={styles.textPosventa}>
          En ese sentido, desarrollamos una red de postventa que abarca más de
          setenta servicios técnicos en todo el país, y otro importante número
          en los países donde exportamos nuestros productos.
        </p>
      </div>
      <div className={styles.container2}>
        <div className={styles.box4}>
          <h2>Estamos Comprometidos</h2>
          <p className={styles.cultureText}>
            <b>Defender y promover los Derechos Humanos</b> considerándolos en
            toda toma de decisiones.
          </p>
          <p className={styles.cultureText}>
            <b>Generar un ambiente de trabajo</b> donde la integridad, el
            protagonismo y la alegría faciliten el desarrollo individual,
            empresarial y social en un proceso de mejora continua.
          </p>
          <p className={styles.cultureText}>
            <b>Impulsar una cultura de seguridad y salud ocupacional.</b>
          </p>
          <p className={styles.cultureText}>
            <b>Preservar de daños físicos al personal</b> tomando como punto de
            partida el cumplimiento legal, y dentro de las posibilidades de la
            empresa, promover el cuidado de la salud.
          </p>
          <p className={styles.cultureText}>
            <b>Actualizar el conocimiento y cumplimiento</b> de toda
            legislación, reglamentos, derechos, normativas aplicables incluyendo
            los Derechos Laborales y Medioambientales.
          </p>
          <p className={styles.cultureText}>
            <b>Promover mediante acciones concretas</b> la toma de conciencia y
            participación activa en el{" "}
            <b>cuidado y protección del medio ambiente,</b>
            previniendo la contaminación.
          </p>
          <p className={styles.cultureText}>
            Sensibilizar interna y externamente sobre la
            <b>Responsabilidad Social y Acciones Anticorrupción.</b>
          </p>
        </div>
        <div className={styles.box5}>
          <div>
            <h2>Política</h2>
            <p>
              El sistema Integrado de Gestión tiene por alcance a: El diseño,
              producción, verificación primitiva, comercialización, servicio
              post venta y calibración de balanzas y básculas
              electrónicas,controladores fiscales, procesadores digitales e
              impresores.
            </p>
            <b>
              En KRETZ S.A. mantenemos y mejoramos un Sistema Integrado de
              Gestión con la finalidad de ayudar a nuestros clientes en la
              operación y control de sus negocios mediante soluciones
              tecnológicas.
            </b>
          </div>
          <Image
            src="https://res.cloudinary.com/dpa8t14c2/image/upload/v1721086644/Kretz-Practica/additional/uqbraz25vm3a3v6uvcme.svg"
            height={550}
            width={532}
            alt="empresa"
          />
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default page;
