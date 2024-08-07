import styles from "./ServiceList.module.css"
const ServiceList = ({ services, onSelectService }) => {
    return (
      <ul>
        {services.map(service => (
          <li key={service.name} onClick={() => onSelectService(service)} className={styles.item}>
            {service.name} - {service.province}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ServiceList;
  