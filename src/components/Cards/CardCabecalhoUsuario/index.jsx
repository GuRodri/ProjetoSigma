import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto, ContainerTexto5, ContainerTexto1 } from './style';

const cardTexts = [
  { component: ContainerTexto1, text: 'ID:' },
  { component: ContainerTexto, text: 'Nome:' },
  { component: ContainerTexto, text: 'Email:' },
  { component: ContainerTexto, text: 'Genero:' },
  { component: ContainerTexto5, text: 'Ações:' }
];

const CardCabecalhoUsuario = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        {cardTexts.map((item, index) => (
          <item.component key={index}>
            <p>{item.text}</p>
          </item.component>
        ))}
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoUsuario;
