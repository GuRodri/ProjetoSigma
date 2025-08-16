import React from 'react';
import { 
  ProductDescriptionContainer, 
  ProductDescriptionTitle, 
  ProductDescriptionText, 
  ContainerEspacamento 
} from './style';

const DescricaoProduto = ({ fichaTecnica }) => {
  return (
    <ProductDescriptionContainer className="produto-descricao-container">
      <ContainerEspacamento className="produto-descricao-espacamento">
        <ProductDescriptionTitle className="produto-descricao-titulo">
          Ficha Técnica
        </ProductDescriptionTitle>
        <ProductDescriptionText 
          className="produto-descricao-texto"
          dangerouslySetInnerHTML={{ __html: fichaTecnica }}
        />
      </ContainerEspacamento>
    </ProductDescriptionContainer>
  );
};

export default DescricaoProduto;
