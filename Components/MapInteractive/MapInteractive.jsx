"use client";
import WorldMap2 from "@/public/mapa2.geo.json";
import { useState, useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./MapInteractive.module.css"

const MapChart = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const operatingCountries = ['Argentina','Brazil','Lebanon','Bolivia','Uruguay','Chile','Colombia','United States of America','Costa Rica','Ecuador','Ghana','Guatemala','Mexico','Panama','Paraguay','Peru','Iran','Iraq', 'Saudi Arabia', 'Syria'];

  const geographies = useMemo(() => WorldMap2, []);

  return (
    <ComposableMap className={styles.map}>
      <Geographies geography={geographies}>
        {({ geographies }) =>
          geographies.map(geo => {
            const isOperating = operatingCountries.includes(geo.properties.sovereignt);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setSelectedCountry(NAME);
                }}
                onMouseLeave={() => {
                  setSelectedCountry('');
                }}
                style={{
                  default: { fill: isOperating ? "#007CDD" : "#455363" },
                  hover: { fill: "#00AD9A" },
                  pressed: { fill: "#00AD9A" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
