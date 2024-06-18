import React, { useState, useEffect } from 'react';
import StarRating from '../Rating';
import { ProductInfoContainer, ProductDescription, ProductPrice, ProductButtonsContainer } from './style'; // Verifique o caminho do arquivo de estilos
import BComprar from '../../components/Button/Comprar';
import BAdicionarCarrinho from '../../components/Button/AdicionarAoCarrinho';

const InformacaoProduto = ({ nomeProduto, descricaoProduto, preco, quantidadeEstoque, mediaAvaliacao }) => {
  return (
    <ProductInfoContainer>
      <h2>{nomeProduto}</h2>
      <ProductDescription>{descricaoProduto}</ProductDescription>
      <ProductPrice><strong>Preço:</strong> R$ {preco.toFixed(2)}</ProductPrice>
      <StarRating rating={mediaAvaliacao} />
      <p><strong>Estoque:</strong> {quantidadeEstoque}</p>
      <ProductButtonsContainer>
        <BComprar />
        <BAdicionarCarrinho />
      </ProductButtonsContainer>
    </ProductInfoContainer>
  );
};

export default InformacaoProduto;
