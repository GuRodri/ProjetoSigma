import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';


const CardAmbienteUsuario = () => {
  return (
    <Container>
      <CardContainer>
        <Description>Historico de Compras</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Favoritos</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Atualize seus dados</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
      <CardContainer>
        <Description>Ajuda?</Description>
        <Image src="https://via.placeholder.com/150" style={{ width: "100%" }} alt="Imagem do Card" />
      </CardContainer>
    </Container>
    
  );
};

export default CardAmbienteUsuario;