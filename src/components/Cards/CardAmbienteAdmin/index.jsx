import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';


const CardAmbienteAdmin = () => {
  return (
    <Container>
      <CardContainer>
        <Description>Produtos</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Anuncios</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Usuarios</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Jogos</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
    </Container>
    
  );
};

export default CardAmbienteAdmin;