import styles from "./ServiceList.module.css"
const ServiceList = ({ services, onSelectService }) => {
    return (
      <ul>
        {services.map(service => (
          <li key={service.id} onClick={() => onSelectService(service)} className={styles.item}>
            {service.name} - {service.address}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ServiceList;
  