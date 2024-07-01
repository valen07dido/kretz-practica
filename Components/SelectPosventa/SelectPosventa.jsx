"use client";

import { useState } from "react";
import styles from "./SelectPosventa.module.css";
const provinciasServicios = {
  "Buenos Aires": [
    "Servicio Técnico A",
    "Servicio Técnico B",
    "Servicio Técnico C",
  ],
  Córdoba: ["Servicio Técnico D", "Servicio Técnico E"],
  "Santa Fe": [
    "Servicio Técnico F",
    "Servicio Técnico G",
    "Servicio Técnico H",
  ],
};

export default function SelectPosventa() {
  const [provincia, setProvincia] = useState("");
  const [servicios, setServicios] = useState([]);

  const handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;
    setProvincia(selectedProvincia);
    setServicios(provinciasServicios[selectedProvincia] || []);
  };

  return (
    <div>
      <select
        id="provincias"
        value={provincia}
        onChange={handleProvinciaChange}
        className={styles.select}
      >
        <option value="" className={styles.options}>Posventa Argentina</option>
        <option value="Buenos Aires" className={styles.options}>Buenos Aires</option>
        <option value="Córdoba" className={styles.options}>Córdoba</option>
        <option value="Santa Fe" className={styles.options}>Santa Fe</option>
      </select>

      {servicios.length > 0 && (
        <div id="servicios">
          <h2>Servicios Técnicos en {provincia}</h2>
          <ul>
            {servicios.map((servicio, index) => (
              <li key={index}>{servicio}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
