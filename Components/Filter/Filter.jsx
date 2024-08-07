"use client"
import { useState } from 'react';
import styles from "./Filter.module.css"
const Filter = ({ onFilterChange }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange(value);
  };

  return (
    <input 
      type="text" 
      value={search} 
      onChange={handleInputChange} 
      placeholder="Buscar tu servicio técnico 🛠"
      className={styles.input}
    />
  );
};

export default Filter;