import React from 'react';
import StarRating from '../Rating';
import { 
  ProductInfoContainer, 
  ProductDescription, 
  ProductPrice, 
  ProductButtonsContainer, 
  ProductTitle, 
  StockInfo 
} from './style';
import BComprar from '../../components/Button/Comprar';
import BAdicionarCarrinho from '../../components/Button/AdicionarAoCarrinho';

const InformacaoProduto = ({ nomeProduto, descricaoProduto, preco, quantidadeEstoque, mediaAvaliacao }) => {
  return (
    
      <ProductInfoContainer>
        <ProductTitle>{nomeProduto}</ProductTitle>
        <ProductDescription>{descricaoProduto}</ProductDescription>
        <ProductPrice>Preço: <strong>R$ {preco.toFixed(2)}</strong></ProductPrice>
        <StarRating rating={mediaAvaliacao} />
        <StockInfo>Estoque: <strong>{quantidadeEstoque > 0 ? `${quantidadeEstoque} unidades` : 'Indisponível'}</strong></StockInfo>
        <ProductButtonsContainer>
          <BComprar />
          <BAdicionarCarrinho />
        </ProductButtonsContainer>
      </ProductInfoContainer>
   
  );
};

export default InformacaoProduto;
