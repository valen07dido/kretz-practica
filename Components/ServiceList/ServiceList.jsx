const ServiceList = ({ services, onSelectService }) => {
    return (
      <ul>
        {services.map(service => (
          <li key={service.id} onClick={() => onSelectService(service)}>
            {service.name} - {service.address}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ServiceList;
  