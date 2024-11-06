/*import React from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';


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
           <NavLink to='/carrinho-compras'><BAdicionarCarrinho /></NavLink>
        </ProductButtonsContainer>
      </ProductInfoContainer>
   
  );
};

export default InformacaoProduto;*/

import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../services/apiCliente';

const InformacaoProduto = ({ idProduto, nomeProduto, descricaoProduto, preco, quantidadeEstoque, mediaAvaliacao, urlImagem }) => {
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState(1); // Estado para a quantidade selecionada

  const handleAdicionarCarrinho = async () => {
    const idCarrinho = 1; // Substitua por uma lógica para obter o ID correto do carrinho

    const itemCarrinho = {
      idCarrinho: idCarrinho,
      idProduto: idProduto,
      quantidade: quantidade,
      precoUnitario: preco,
      urlImagem: urlImagem,
      descricaoProduto: descricaoProduto,
      ativo: true
    };

    try {
      await apiCliente.post('/api/ItemCarrinho', itemCarrinho);
      alert('Produto adicionado ao carrinho com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      alert('Erro ao adicionar produto ao carrinho. Tente novamente.');
    }
  };

  // Definir a quantidade máxima a ser exibida na caixa de seleção
  const maxQuantity = quantidadeEstoque > 6 ? 6 : quantidadeEstoque;

  return (
    <ProductInfoContainer>
      <ProductTitle>{nomeProduto}</ProductTitle>
      <ProductDescription>{descricaoProduto}</ProductDescription>
      <ProductPrice>Preço: <strong>R$ {preco.toFixed(2)}</strong></ProductPrice>
      <StarRating rating={mediaAvaliacao} />
      <StockInfo>
        Estoque: <strong style={{ color: quantidadeEstoque === 0 ? 'red' : 'inherit' }}>
          {quantidadeEstoque > 0 ? `${quantidadeEstoque} unidades` : 'Produto indisponível'}
        </strong>
      </StockInfo>

      {/* Caixa de seleção para quantidade */}
      {quantidadeEstoque > 0 && (
        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <select 
            id="quantidade" 
            value={quantidade} 
            onChange={(e) => setQuantidade(Number(e.target.value))}
          >
            {[...Array(maxQuantity).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      )}

      <ProductButtonsContainer>
        <BComprar />
        <button onClick={handleAdicionarCarrinho}>Adicionar ao Carrinho</button>
      </ProductButtonsContainer>
    </ProductInfoContainer>
  );
};

export default InformacaoProduto;
