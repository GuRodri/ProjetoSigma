import React from 'react';
import StarRating from '../Rating';
import { ProductInfoContainer, ProductDescription, ProductPrice, ProductButtonsContainer, ProductContainer, ProductTitle } from './style';
import BComprar from '../../components/Button/Comprar';
import BAdicionarCarrinho from '../../components/Button/AdicionarAoCarrinho';

const InformacaoProduto = ({ nomeProduto, descricaoProduto, preco, quantidadeEstoque, mediaAvaliacao }) => {
  return (
    <ProductContainer>
      <ProductInfoContainer>
        <ProductTitle>{nomeProduto}</ProductTitle>
        <ProductDescription>{descricaoProduto}</ProductDescription>
        <ProductPrice><strong>Preço:</strong> R$ {preco.toFixed(2)}</ProductPrice>
        <StarRating rating={mediaAvaliacao} />
        <p><strong>Estoque:</strong> {quantidadeEstoque}</p>
        <ProductButtonsContainer>
          <BComprar />
          <BAdicionarCarrinho />
        </ProductButtonsContainer>
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default InformacaoProduto;
