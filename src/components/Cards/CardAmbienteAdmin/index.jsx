import React from 'react';
import { Container, CardContainer, Description } from './style';
import { NavLink } from 'react-router-dom';
import {
  PackageSearch,
  Megaphone,
  Users,
  Gamepad2,
  Image as ImageIcon
} from 'lucide-react';

const CardAmbienteAdmin = () => {
  const cardItems = [
    { to: '/lista-produtos', description: 'Produtos', Icon: PackageSearch, color: '#4ade80' }, // verde
    { to: '/lista-anuncios', description: 'Anúncios', Icon: Megaphone, color: '#60a5fa' }, // azul
    { to: '/lista-usuarios', description: 'Usuários', Icon: Users, color: '#f472b6' }, // rosa
    { to: '/lista-jogos', description: 'Jogos', Icon: Gamepad2, color: '#facc15' }, // amarelo
    { to: '/cadastro-imagens', description: 'Imagens', Icon: ImageIcon, color: '#a78bfa' } // roxo
  ];

  return (
    <Container>
      {cardItems.map((item, index) => (
        <CardContainer key={index}>
          <NavLink to={item.to}>
            <item.Icon
              size={40}
              strokeWidth={1.5}
              style={{ marginBottom: '1em', color: item.color }}
            />
            <Description>{item.description}</Description>
          </NavLink>
        </CardContainer>
      ))}
    </Container>
  );
};

export default CardAmbienteAdmin;
