import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto, P1, P5 } from './style';

const CardCabecalhoAnuncios = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        <ContainerTexto>
          <P1>Imagem</P1>
        </ContainerTexto>
        <ContainerTexto>
          <p>Título</p>
        </ContainerTexto>
        <ContainerTexto>
          <P5>Ações</P5>
        </ContainerTexto>
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoAnuncios;
