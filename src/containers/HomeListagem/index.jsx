import React, { useEffect, useState, useContext } from 'react';
import { ContainerHome, ContainerListagem, ContainerOrdenacao, Select, ContainerTexto, ContainerTexto1, ContainerEspacamento } from "./style";
import { SearchContext } from '../../context/searchCoxtexto';
import CardVertical from "../../components/Cards/CardVertical";
import apiCliente from '../../services/apiCliente';

const HomeListagem = () => {
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
    return <div>Carregando...</div>;
  }

  if (hasError) {
    return <div>Erro ao carregar produtos.</div>;
  }

  if (produtos.length === 0) {
    return <div>Nenhum produto encontrado.</div>;
  }

  return (
    <ContainerHome>
      <ContainerOrdenacao>
        <ContainerEspacamento>
          <ContainerTexto>
            <p>Resultado da pesquisa por: </p>
            <strong>{globalSearchTerm}</strong>
          </ContainerTexto>
          <ContainerTexto1>
            <label htmlFor="sortOrder">Ordenar por preço: </label>
            <Select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
              <option value="asc">Menor Preço</option>
              <option value="desc">Maior Preço</option>
            </Select>
          </ContainerTexto1>
        </ContainerEspacamento>
      </ContainerOrdenacao>
      <ContainerListagem>
        <CardVertical produtos={sortProdutos(produtos)} searchTerm={globalSearchTerm} />
      </ContainerListagem>
    </ContainerHome>
  );
}

export default HomeListagem;
