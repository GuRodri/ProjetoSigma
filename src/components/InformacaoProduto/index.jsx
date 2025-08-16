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
import { useAuth } from '../../context/autContexto1';

const InformacaoProduto = ({ idProduto, nomeProduto, descricaoProduto, preco, quantidadeEstoque, mediaAvaliacao, urlImagem }) => {
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState(1); // Estado para a quantidade selecionada
  const { currentUser } = useAuth();

  const handleAdicionarCarrinho = async () => {
    if (!currentUser || !currentUser.idUsuario) {
      alert('Usuário não autenticado!');
      return;
    }
    const idUsuario = currentUser.idUsuario;
    let idCarrinho = null;

    // 1. Buscar carrinho do usuário na API
    try {
      const resCarrinho = await apiCliente.get(`/api/carrinhoCompra/${idUsuario}`);
      // Busca qualquer carrinho com idUsuario igual ao logado
      let carrinhoUsuario = null;
      if (Array.isArray(resCarrinho.data) && resCarrinho.data.length > 0) {
        carrinhoUsuario = resCarrinho.data.find(c => c.idUsuario === idUsuario);
      } else if (resCarrinho.data && resCarrinho.data.idCarrinho && resCarrinho.data.idUsuario === idUsuario) {
        carrinhoUsuario = resCarrinho.data;
      }
      if (carrinhoUsuario) {
        idCarrinho = carrinhoUsuario.idCarrinho;
      } else {
        // Só cria se realmente não houver nenhum carrinho para esse usuário
        const now = new Date().toISOString();
        const resNovo = await apiCliente.post('/api/carrinhoCompra', {
          idUsuario: idUsuario,
          dataHoraCriacaoCarrinho: now,
          ativo: true,
          usuarioIDUsuario: idUsuario
        });
        if (Array.isArray(resNovo.data) && resNovo.data.length > 0) {
          idCarrinho = resNovo.data[0].idCarrinho;
        } else if (resNovo.data && resNovo.data.idCarrinho) {
          idCarrinho = resNovo.data.idCarrinho;
        }
      }
    } catch (err) {
      // Se não encontrar, criar novo carrinho
      if (err.response && err.response.status === 404) {
        const now = new Date().toISOString();
        const resNovo = await apiCliente.post('/api/carrinhoCompra', {
          idUsuario: idUsuario,
          dataHoraCriacaoCarrinho: now,
          ativo: true,
          usuarioIDUsuario: idUsuario
        });
        if (Array.isArray(resNovo.data) && resNovo.data.length > 0) {
          idCarrinho = resNovo.data[0].idCarrinho;
        } else if (resNovo.data && resNovo.data.idCarrinho) {
          idCarrinho = resNovo.data.idCarrinho;
        }
      } else {
        alert('Erro ao buscar carrinho de compras.');
        return;
      }
    }

    if (!idCarrinho) {
      alert('Não foi possível obter/criar o carrinho de compras.');
      return;
    }

    // Verifica se o produto já está no carrinho
    try {
      const resItens = await apiCliente.get(`/api/ItemCarrinho?idCarrinho=${idCarrinho}`);
      let itemExistente = null;
      if (Array.isArray(resItens.data)) {
        itemExistente = resItens.data.find(item => item.idProduto === idProduto);
      }

      if (itemExistente) {
        // Atualiza a quantidade do item existente
        const novaQuantidade = itemExistente.quantidade + quantidade;
        await apiCliente.put(`/api/ItemCarrinho/${itemExistente.idItemCarrinho}`, {
          ...itemExistente,
          quantidade: novaQuantidade
        });
        alert('Quantidade do produto atualizada no carrinho!');
      } else {
        // Adiciona novo item ao carrinho
        const itemCarrinho = {
          idCarrinho: idCarrinho,
          idProduto: idProduto,
          quantidade: quantidade,
          precoUnitario: preco,
          urlImagem: urlImagem,
          descricaoProduto: descricaoProduto,
          ativo: true
        };
        await apiCliente.post('/api/ItemCarrinho', itemCarrinho);
        alert('Produto adicionado ao carrinho com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao adicionar/atualizar produto no carrinho:', error);
      alert('Erro ao adicionar/atualizar produto no carrinho. Tente novamente.');
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
