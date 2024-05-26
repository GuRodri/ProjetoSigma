import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';


const CardAmbienteUsuario = () => {
  return (
    <Container>
        <CardContainer>
        <NavLink>
          <Description>Historico de Compras</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>
        <CardContainer>
        <NavLink to='/favoritos'>
          <Description>Favoritos</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>
        <CardContainer>
        <NavLink to='/atualizar-dados'>
          <Description>Atualize seus dados</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>   
        <CardContainer>
        <NavLink to='/ajuda'> 
          <Description>Ajuda?</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer> 
    </Container>
    
  );
};

export default CardAmbienteUsuario;