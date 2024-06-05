"use client";
import WorldMap2 from "@/public/mapa2.geo.json";
import { useState, useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./MapInteractive.module.css";

const MapChart = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); 
  const operatingCountries = [
    "Argentina",
    "Brazil",
    "Lebanon",
    "Bolivia",
    "Uruguay",
    "Chile",
    "Colombia",
    "United States of America",
    "Costa Rica",
    "Ecuador",
    "Ghana",
    "Guatemala",
    "Mexico",
    "Panama",
    "Paraguay",
    "Peru",
    "Iran",
    "Iraq",
    "Saudi Arabia",
    "Syria",
  ];
  const geographies = useMemo(() => WorldMap2, []);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}> 
      <ComposableMap className={styles.map}>
        <Geographies geography={geographies}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isOperating = operatingCountries.includes(
                geo.properties.sovereignt
              );
              return (
                <svg key={geo.rsmKey}>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="125%" y2="0%">
                      <stop offset="0%" style={{stopColor: "#00ad9a", stopOpacity: 1}} />
                      <stop offset="125%" style={{stopColor: "#0064ff", stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { sovereignt } = geo.properties;
                      setSelectedCountry(sovereignt);
                    }}
                    onMouseLeave={() => {
                      setSelectedCountry("");
                    }}
                    style={{
                      default: { fill: isOperating ? "url(#gradient)" : "#455363" },
                      hover: { fill: "#697581" },
                      pressed: { fill: "#00AD9A" },
                    }}
                  />
                </svg>
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {selectedCountry && (
        <div className={styles.tooltip} style={{ left: mousePosition.x, top: mousePosition.y }}>
          {selectedCountry}
        </div>
      )}
    </div>
  );
};

export default MapChart;