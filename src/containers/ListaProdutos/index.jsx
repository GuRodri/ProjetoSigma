import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerCarrinho, Container } from './style';
import Filtro from '../../components/Filtro';
import apiCliente from '../../services/apiCliente';
import CardListaProdutos from '../../components/Cards/CardListaProdutos';
import { useSearch } from '../../context/searchContext';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filteredProdutos, setFilteredProdutos] = useState([]);
  const { globalSearchTerm } = useSearch();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/produto');
        console.log('Dados recebidos do backend:', response.data);
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  useEffect(() => {
    const filtered = produtos.filter(produto =>
      produto.nomeProduto.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredProdutos(filtered);
  }, [globalSearchTerm, produtos]);

  const handleFilter = ({ sortOrder }) => {
    let filtered = [...produtos];

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.preco - b.preco);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.preco - a.preco);
    }

    setFilteredProdutos(filtered);
  };

  const handleDisableProduto = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/Produto/${id}/disable`);
      console.log('Produto desabilitado com sucesso! ID:', id);
      const updatedProdutos = produtos.map(produto => {
        if (produto.idProduto === id) {
          return { ...produto, ativo: false };
        }
        return produto;
      });
      setProdutos(updatedProdutos);
      setFilteredProdutos(updatedProdutos.filter(produto => produto.ativo));
      alert('Produto desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar produto: ', error);
      alert('Erro ao desabilitar produto. Verifique o console para mais detalhes.');
    }
  };

  return (
    <Container>
      <h2>Lista de Produtos</h2>
      <Filtro onFilter={handleFilter} />
      <ContainerCarrinho>
        <ul>
          <NavLink to="/cadastro-produtos">Adicionar</NavLink>
          {filteredProdutos.map((produto) => (
            <CardListaProdutos
              key={produto.idProduto}
              produto={produto}
              handleDisableProduto={handleDisableProduto}
            />
          ))}
        </ul>
      </ContainerCarrinho>
    </Container>
  );
};

export default ListaProdutos;
