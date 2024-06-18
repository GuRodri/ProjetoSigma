import React from 'react';
import {
  ProductInfoContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductButtonsContainer
} from './style'; // Verifique o caminho do arquivo de estilos
import BComprar from '../../components/Button/Comprar';
import BAdicionarCarrinho from '../../components/Button/AdicionarAoCarrinho';

const InformacaoProduto = ({ nomeProduto, descricaoProduto, preco, quantidadeEstoque }) => {
  return (
    <ProductInfoContainer>
      <ProductName>{nomeProduto}</ProductName>
      <ProductDescription>{descricaoProduto}</ProductDescription>
      <ProductPrice><strong>Preço:</strong> R$ {preco.toFixed(2)}</ProductPrice>
      <p><strong>Quantidade em Estoque:</strong> {quantidadeEstoque}</p>
      <ProductButtonsContainer>
        <BComprar />
        <BAdicionarCarrinho />
      </ProductButtonsContainer>
    </ProductInfoContainer>
  );
};

export default InformacaoProduto;
