import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';
import Packing from '../../../assets/icons/Packing/Packing.svg';
import Anuncio from '../../../assets/icons/Anuncio/Anuncio.svg';
import People from '../../../assets/icons/Usuario/People.svg';
import Jogo from '../../../assets/icons/Jogo/jogo.svg';
import Imagem from '../../../assets/icons/Imagem/imagem.svg';

const CardAmbienteAdmin = () => {
  return (
    <Container>
      <CardContainer>
        <NavLink to='/lista-produtos'>
          <Description>Produtos</Description>
          <Image src={Packing} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-anuncios'>
          <Description>Anuncios</Description>
          <Image src={Anuncio} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-usuarios'>
          <Description>Usuarios</Description>
          <Image src={People} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/lista-jogos'>
          <Description>Jogos</Description>
          <Image src={Jogo} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
      <CardContainer>
        <NavLink to='/cadastro-imagens'>
          <Description>Imagens</Description>
          <Image src={Imagem} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
      </CardContainer>
    </Container>
    
  );
};

export default CardAmbienteAdmin;