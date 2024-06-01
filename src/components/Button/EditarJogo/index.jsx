import React from 'react';
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';

const BEditarJogo = ({ id }) => {
    const navigate = useNavigate();
  
    const handleEdit = () => {
      navigate(`/editar-jogos/${id}`);
    };
  
    return <Button onClick={handleEdit}>Editar</Button>;
};
  
export default BEditarJogo;

