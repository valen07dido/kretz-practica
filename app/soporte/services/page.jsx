"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ServiceList from "@/Components/ServiceList/ServiceList";
import Filter from "@/Components/Filter/Filter";
import styles from "./Page.module.css";
import { distributor } from "@/Utils/distributor";

const Map = dynamic(() => import("@/Components/MapDinamic/MapDinamic"), {
  ssr: false,
});

const Page = () => {
  const [filteredServices, setFilteredServices] = useState(distributor);
  const [center, setCenter] = useState([-33.0999755, -60.6122145]);
  const defaultCenter = [-33.0999755, -60.6122145];

  const handleFilterChange = (filter) => {
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = distributor.filter(
      (d) =>
        d.name.toLowerCase().includes(lowercasedFilter) ||
        d.province.toLowerCase().includes(lowercasedFilter)||
        d.city.toLowerCase().includes(lowercasedFilter)
    );

    setFilteredServices(filteredData);

    if (filteredData.length === distributor.length) {
      setCenter(defaultCenter);
    } else if (filteredData.length > 0) {
      const avgLat =
        filteredData.reduce((sum, d) => sum + d.latitude, 0) /
        filteredData.length;
      const avgLng =
        filteredData.reduce((sum, d) => sum + d.longitude, 0) /
        filteredData.length;
      setCenter([avgLat, avgLng]);
    } else {
      setCenter(defaultCenter);
    }
  };

  const handleSelectService = (selectedService) => {
    setCenter([selectedService.latitude, selectedService.longitude]);
  };

  useEffect(() => {
    if (filteredServices.length === distributor.length) {
      setCenter(defaultCenter);
    } else if (filteredServices.length > 0) {
      const avgLat =
        filteredServices.reduce((sum, d) => sum + d.latitude, 0) /
        filteredServices.length;
      const avgLng =
        filteredServices.reduce((sum, d) => sum + d.longitude, 0) /
        filteredServices.length;
      setCenter([avgLat, avgLng]);
    } else {
      setCenter(defaultCenter);
    }
  }, [filteredServices]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Filter onFilterChange={handleFilterChange} />
        <ServiceList
          services={filteredServices}
          onSelectService={handleSelectService}
        />
      </div>
      <div className={styles.map}>
        <Map services={filteredServices} center={center} />
      </div>
    </div>
  );
};

export default Page;
