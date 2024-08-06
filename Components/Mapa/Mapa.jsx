import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Ajuste para que los iconos se muestren correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
};

const Map = ({ services, center }) => {
  return (
    <MapContainer center={center} zoom={15} style={{ height: '90%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {services.map(service => (
        <Marker key={service.id} position={[service.latitude, service.longitude]}>
          <Popup>
            {service.name}<br/>{service.address}
          </Popup>
        </Marker>
      ))}
      <ChangeView center={center} />
    </MapContainer>
  );
};

export default Map;