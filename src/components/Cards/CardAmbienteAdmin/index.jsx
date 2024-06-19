import React from 'react';
import { Container, CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';
import Packing from '../../../assets/icons/Packing/Packing.svg';
import Anuncio from '../../../assets/icons/Anuncio/Anuncio.svg';
import People from '../../../assets/icons/Usuario/People.svg';
import Jogo from '../../../assets/icons/Jogo/jogo.svg';
import Imagem from '../../../assets/icons/Imagem/imagem.svg';

const CardAmbienteAdmin = () => {
  const cardItems = [
    { to: '/lista-produtos', description: 'Produtos', src: Packing },
    { to: '/lista-anuncios', description: 'Anuncios', src: Anuncio },
    { to: '/lista-usuarios', description: 'Usuarios', src: People },
    { to: '/lista-jogos', description: 'Jogos', src: Jogo },
    { to: '/cadastro-imagens', description: 'Imagens', src: Imagem }
  ];

  return (
    <Container>
      {cardItems.map((item, index) => (
        <CardContainer key={index}>
          <NavLink to={item.to}>
            <Description>{item.description}</Description>
            <Image src={item.src} style={{ width: '100%' }} alt={`Imagem do Card ${item.description}`} />
          </NavLink>
        </CardContainer>
      ))}
    </Container>
  );
};

export default CardAmbienteAdmin;
