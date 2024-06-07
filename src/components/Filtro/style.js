// src/components/style.js
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  option{
    background-color: #333;
  
  }
`;
export const Select = styled.select`
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color:transparent;
    color:#d9d9d9;
`;

export const FilterIcon = styled.div`
    font-size: 24px; /* Tamanho do ícone */
    cursor: pointer; /* Cursor do mouse ao passar por cima do ícone */
    color: #333; /* Cor do ícone */
    margin-right: 10px; /* Espaçamento à direita do ícone */
`;
export const FilterDropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    width: 100%;
    z-index: 1000;
  `;