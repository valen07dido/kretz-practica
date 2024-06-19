"use client"
import { useState } from 'react';

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
      placeholder="Buscar servicio técnico"
    />
  );
};

export default Filter;