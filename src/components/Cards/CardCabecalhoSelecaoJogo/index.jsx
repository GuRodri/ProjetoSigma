import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto,P1,P5 } from './style';

const CardCabecalhoSelecaoJogo = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        <ContainerTexto>
          <P1>Imagem:</P1>
        </ContainerTexto>
        <ContainerTexto>
          <p>Nome:</p>
        </ContainerTexto>
        <ContainerTexto>
          <P5>Ação:</P5>
        </ContainerTexto>
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoSelecaoJogo;