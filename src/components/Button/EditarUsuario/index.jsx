import React from 'react';
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';

const BEditarUsuario = ({ id }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      navigate(`/editar-usuarios/${id}`);
    };
  
    return <Button onClick={handleEdit}>Editar</Button>;
};
  
export default BEditarUsuario;

