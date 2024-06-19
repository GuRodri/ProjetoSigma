import React from 'react';
import { Container, CardContainer, Description, Image } from './style';
import { NavLink } from 'react-router-dom';
import Historico from '../../../assets/icons/Historico/Historico.svg';
import Favorito from '../../../assets/icons/Favorito/Favorito.svg';
import IndividualServer from '../../../assets/icons/IndividualServer/IndividualServer.svg';
import Ajuda from '../../../assets/icons/Ajuda/ajuda.svg';

const CardAmbienteUsuario = () => {
  const cardItems = [
    { to: '', description: 'Historico de Compras', src: Historico },
    { to: '/favoritos', description: 'Favoritos', src: Favorito },
    { to: '/atualizar-dados', description: 'Atualize seus dados', src: IndividualServer },
    { to: '/ajuda', description: 'Ajuda?', src: Ajuda }
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

export default CardAmbienteUsuario;
