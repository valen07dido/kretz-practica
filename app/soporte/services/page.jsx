"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ServiceList from "@/Components/ServiceList/ServiceList";
import Filter from "@/Components/Filter/Filter";

const Map = dynamic(() => import("@/Components/Mapa/Mapa"), {
  ssr: false,
});

const services = [
  {
    id: 1,
    name: "Kretz SA",
    address: "Ruta Nacional 9 Km 276, Pueblo Esther, Santa Fe",
    latitude: -33.0999755,
    longitude: -60.6122145,
  },
  {
    id: 2,
    name: "Balanmac",
    address: "Pasco 1236, Rosario, Santa Fe",
    latitude: -32.9591338,
    longitude: -60.6458874,
  },
  {
    id: 3,
    name: "Soliteng",
    address: "Bv. Avellaneda 2415, Rosario, Santa Fe",
    latitude: -32.9582674,
    longitude: -60.6883869,
  },
  {
    id: 4,
    name: "Walter Destefano",
    address: "Tucumán 1002, 9 de julio, Buenos Aires",
    latitude: -35.4468465,
    longitude: -60.8822863,
  },
  {
    id: 5,
    name: "Emiliano Mancinelli",
    address: "Juan Molina 1187, Bahía Blanca, Buenos Aires",
    latitude: -33.0999755,
    longitude: -60.6122145,
  },
];

const Page = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [center, setCenter] = useState([0, 0]);

  const handleFilterChange = (filter) => {
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = services.filter(
      (service) =>
        service.name.toLowerCase().includes(lowercasedFilter) ||
        service.address.toLowerCase().includes(lowercasedFilter)
    );

    setFilteredServices(filteredData);

    if (filteredData.length > 0) {
      const avgLat =
        filteredData.reduce((sum, service) => sum + service.latitude, 0) /
        filteredData.length;
      const avgLng =
        filteredData.reduce((sum, service) => sum + service.longitude, 0) /
        filteredData.length;
      setCenter([avgLat, avgLng]);
    }
  };

  const handleSelectService = (service) => {
    setCenter([service.latitude, service.longitude]);
  };

  useEffect(() => {
    if (filteredServices.length > 0) {
      const avgLat =
        filteredServices.reduce((sum, service) => sum + service.latitude, 0) /
        filteredServices.length;
      const avgLng =
        filteredServices.reduce((sum, service) => sum + service.longitude, 0) /
        filteredServices.length;
      setCenter([avgLat, avgLng]);
    }
  }, [filteredServices]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", padding: "10px" }}>
        <Filter onFilterChange={handleFilterChange} />
        <ServiceList
          services={filteredServices}
          onSelectService={handleSelectService}
        />
      </div>
      <div style={{ width: "70%", height: "100vh" }}>
        <Map services={filteredServices} center={center} />
      </div>
    </div>
  );
};

export default Page;
