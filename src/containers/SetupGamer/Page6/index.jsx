import React, { useEffect, useState, useContext } from 'react';
import { ContainerHome, ContainerListagem, ContainerOrdenacao, Select, MensagemNenhumProduto } from "./style";
import { SearchContext } from '../../../context/searchCoxtexto';
import CardVertical from "../../../components/Cards/CardVertical";
import apiCliente from '../../../services/apiCliente';

const SetupGamerPage6 = () => {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); // Ordem de classificação padrão
  const { globalSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        console.log('Resposta da API:', response);
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
        console.log('Produtos Ativos:', produtosAtivos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortProdutos = (produtos) => {
    return produtos.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.preco - b.preco;
      } else {
        return b.preco - a.preco;
      }
    });
  };

  if (isLoading) {
    return (
      <ContainerHome>
        <ContainerListagem>
          <MensagemNenhumProduto>
            Carregando produtos...
          </MensagemNenhumProduto>
        </ContainerListagem>
      </ContainerHome>
    );
  }

  if (hasError) {
    return (
      <ContainerHome>
        <ContainerListagem>
          <MensagemNenhumProduto>
            Erro ao carregar produtos. Tente novamente.
          </MensagemNenhumProduto>
        </ContainerListagem>
      </ContainerHome>
    );
  }

  if (produtos.length === 0) {
    return (
      <ContainerHome>
        <ContainerListagem>
          <MensagemNenhumProduto>
            Nenhum produto encontrado.
          </MensagemNenhumProduto>
        </ContainerListagem>
      </ContainerHome>
    );
  }

  return (
    <ContainerHome>
      <ContainerOrdenacao>
        <label htmlFor="sortOrder">Ordenar por preço:</label>
        <Select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Menor Preço</option>
          <option value="desc">Maior Preço</option>
        </Select>
      </ContainerOrdenacao>
      <ContainerListagem>
        <CardVertical produtos={sortProdutos(produtos)} searchTerm={globalSearchTerm} />
      </ContainerListagem>
    </ContainerHome>
  );
}

export default SetupGamerPage6;
