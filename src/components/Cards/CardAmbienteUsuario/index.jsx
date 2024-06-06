import React from 'react';
import {Container ,CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';
import Historico from '../../../assets/icons/Historico/Historico.svg';
import Favorito from '../../../assets/icons/Favorito/Favorito.svg';
import IndividualServer from '../../../assets/icons/IndividualServer/IndividualServer.svg';
import Ajuda from '../../../assets/icons/Ajuda/ajuda.svg';


const CardAmbienteUsuario = () => {
  return (
    <Container>
        <CardContainer>
        <NavLink>
          <Description>Historico de Compras</Description>
          <Image src={Historico} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>
        <CardContainer>
        <NavLink to='/favoritos'>
          <Description>Favoritos</Description>
          <Image src={Favorito} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>
        <CardContainer>
        <NavLink to='/atualizar-dados'>
          <Description>Atualize seus dados</Description>
          <Image src={IndividualServer} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer>   
        <CardContainer>
        <NavLink to='/ajuda'> 
          <Description>Ajuda?</Description>
          <Image src={Ajuda} style={{ width: "100%" }} alt="Imagem do Card" />
        </NavLink>
        </CardContainer> 
    </Container>
    
  );
};

export default CardAmbienteUsuario;