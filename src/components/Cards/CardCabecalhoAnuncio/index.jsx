import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto } from './style';

const CardCabecalhoAnuncios = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        <ContainerTexto>
          <p>Imagem:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>ID:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Título:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Preço:</p>
        </ContainerTexto>
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoAnuncios;
