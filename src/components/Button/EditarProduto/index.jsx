import React from 'react';
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';

const BEditarProduto = ({ id }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      navigate(`/editar-produtos/${id}`);
    };
  
    return <Button onClick={handleEdit}>Editar</Button>;
};
  
export default BEditarProduto;

