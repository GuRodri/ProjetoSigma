import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerTexto,ContainerTexto5, ContainerTexto1 } from './style';

const CardCabecalhoUsuario = () => {
  return (
    <CardHome2>
      <ContainerEspacamento>
        <ContainerTexto1>
          <p>ID:</p>
        </ContainerTexto1>
        <ContainerTexto>
          <p>Nome:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Email:</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>Genero:</p>
        </ContainerTexto>
        <ContainerTexto5>
          <p>Ações:</p>
        </ContainerTexto5>
      </ContainerEspacamento>
    </CardHome2>
  );
};

export default CardCabecalhoUsuario;
