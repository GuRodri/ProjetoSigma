import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto,P1,P5 } from './style';

const CardCabecalhoProduto = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        <ContainerTexto>
          <P1>Imagem:</P1>
        </ContainerTexto>
        <ContainerTexto>
          <p>ID:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Nome:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Preço:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Quantidade:</p>
        </ContainerTexto>
        <ContainerTexto>
          <P5>Ações:</P5>
        </ContainerTexto>
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoProduto;
