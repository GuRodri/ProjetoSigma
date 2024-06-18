import React from 'react';
import { ProductDescriptionContainer, ProductDescriptionTitle, ProductDescriptionText, ContainerEspacamento } from './style'; // Ajuste o caminho do arquivo de estilos conforme necessário

const DescricaoProduto = ({ fichaTecnica }) => {
  return (
    <ProductDescriptionContainer>
      <ContainerEspacamento>
        <ProductDescriptionTitle>Ficha Técnica</ProductDescriptionTitle>
        <ProductDescriptionText>{fichaTecnica}</ProductDescriptionText>
      </ContainerEspacamento>
    </ProductDescriptionContainer>
  );
};

export default DescricaoProduto;

