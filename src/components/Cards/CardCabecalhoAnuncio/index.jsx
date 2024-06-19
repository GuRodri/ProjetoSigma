import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto, P1, P5 } from './style';

const cardTexts = [
  { component: P1, text: 'Imagem:' },
  { component: 'p', text: 'ID:' },
  { component: 'p', text: 'Título:' },
  { component: 'p', text: 'Preço:' },
  { component: P5, text: 'Ações:' }
];

const CardCabecalhoAnuncios = () => {
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

export default CardCabecalhoAnuncios;
