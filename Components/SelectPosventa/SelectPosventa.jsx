"use client"

import { useState } from 'react';

const provinciasServicios = {
  "Buenos Aires": ["Servicio Técnico A", "Servicio Técnico B", "Servicio Técnico C"],
  "Córdoba": ["Servicio Técnico D", "Servicio Técnico E"],
  "Santa Fe": ["Servicio Técnico F", "Servicio Técnico G", "Servicio Técnico H"],
};

export default function SelectPosventa() {
  const [provincia, setProvincia] = useState('');
  const [servicios, setServicios] = useState([]);

  const handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;
    setProvincia(selectedProvincia);
    setServicios(provinciasServicios[selectedProvincia] || []);
  };

  return (
    <div>
      <h1>Selector de Provincias Argentinas</h1>
      <label htmlFor="provincias">Selecciona una provincia:</label>
      <select id="provincias" value={provincia} onChange={handleProvinciaChange}>
        <option value="">--Selecciona una provincia--</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Santa Fe">Santa Fe</option>
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
