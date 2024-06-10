import React from 'react';
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';

const BEditarAnuncios = ({ id }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      navigate(`/editar-anuncios/${id}`);
    };
  
    return <Button onClick={handleEdit}>Editar</Button>;
};
  
export default BEditarAnuncios;
