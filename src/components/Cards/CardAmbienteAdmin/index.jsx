import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';


const CardAmbienteAdmin = () => {
  return (
    <Container>
      <CardContainer>
        <NavLink to='/lista-produtos'>
          <Description>Produtos</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-anuncios'>
          <Description>Anuncios</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-usuarios'>
          <Description>Usuarios</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-jogos'>
          <Description>Jogos</Description>
          <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
    </Container>
    
  );
};

export default CardAmbienteAdmin;