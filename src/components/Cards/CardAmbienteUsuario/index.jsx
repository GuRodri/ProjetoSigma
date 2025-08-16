import React from 'react';
import { Container, CardContainer, Description } from './style';
import { NavLink } from 'react-router-dom';
import {
  History,
  Heart,
  UserCog,
  ShoppingCart
} from 'lucide-react';

const CardAmbienteUsuario = () => {
  const cardItems = [
    { to: '/historico-de-compras', description: 'Histórico de Compras', Icon: History, color: '#f97316' }, // laranja
    { to: '/favoritos', description: 'Favoritos', Icon: Heart, color: '#ef4444' },     // vermelho
    { to: '/carrinho-compras', description: 'Carrinho de Compras', Icon: ShoppingCart, color: '#10b981' }, // verde
    { to: '/atualizar-dados', description: 'Atualize seus dados', Icon: UserCog, color: '#0ea5e9' } // azul
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

export default CardAmbienteUsuario;
