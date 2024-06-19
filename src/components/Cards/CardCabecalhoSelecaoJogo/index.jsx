import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto, P1, P5 } from './style';

const cardTexts = [
  { component: P1, text: 'Imagem:' },
  { component: 'p', text: 'Nome:' },
  { component: P5, text: 'Ação:' }
];

const CardCabecalhoSelecaoJogo = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        {cardTexts.map((item, index) => (
          <ContainerTexto key={index}>
            {React.createElement(item.component, {}, item.text)}
          </ContainerTexto>
        ))}
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoSelecaoJogo;
