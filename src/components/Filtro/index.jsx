// src/components/Filtro.js
import React, { useState } from 'react';
import { FilterContainer, Select } from './style';

const Filtro = ({ onFilter }) => {
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    onFilter({ sortOrder: value });
  };

  return (
    <FilterContainer>
      <Select value={sortOrder} onChange={handleSortChange}>
        <option value="">mais relevantes</option>
        <option value="asc">menor preço</option>
        <option value="desc">maior preço</option>
      </Select>
    </FilterContainer>
  );
};

export default Filtro;
