import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from "./MapDinamic.module.css";
import { distributor } from '@/Utils/distributor';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

const Map = ({ services, center }) => {
  const zoom = services.length === distributor.length ? 10 : Math.max(15 - Math.floor(services.length / 2.5), 1);
  
  return (
    <MapContainer center={center} zoom={zoom} className={styles.container}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {services.map(service => (
        <Marker 
          key={service.name} 
          position={[service.latitude, service.longitude]} 
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            },
          }}
        >
          <Popup>
            {service.name}<br/>{service.address}
          </Popup>
        </Marker>
      ))}
      <ChangeView center={center} zoom={zoom} />
    </MapContainer>
  );
};

export default Map;
