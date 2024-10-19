import React from 'react';
import { 
  ProductDescriptionContainer, 
  ProductDescriptionTitle, 
  ProductDescriptionText, 
  ContainerEspacamento 
} from './style'; // Ajuste o caminho se necessário

const DescricaoProduto = ({ fichaTecnica }) => {
  return (
    <ProductDescriptionContainer>
      <ContainerEspacamento>
        <ProductDescriptionTitle>Ficha Técnica</ProductDescriptionTitle>
        <ProductDescriptionText 
          dangerouslySetInnerHTML={{ __html: fichaTecnica }}
        />
      </ContainerEspacamento>
    </ProductDescriptionContainer>
  );
};

export default DescricaoProduto;
