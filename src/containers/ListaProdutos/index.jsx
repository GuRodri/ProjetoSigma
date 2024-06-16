import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerCarrinho, Container, ContainerBotao } from './style';
import CardListaProdutos from '../../components/Cards/CardListaProdutos';
import { useSearch } from '../../context/searchCoxtexto';
import CardCabecalhoProduto from '../../components/Cards/CardCabecalhoProduto';

function ListaProdutos() {
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch();

  useEffect(() => {
    setGlobalSearchTerm(''); // Limpa o termo de busca global ao montar a página ListaProdutos
  }, [setGlobalSearchTerm]);

  return (
    <Container>
      <h2>Lista de Produtos</h2>
      <ContainerCarrinho>
        <ContainerBotao>
          <NavLink className='adicionar' to="/cadastro-produtos">Adicionar</NavLink>
        </ContainerBotao>
        <CardCabecalhoProduto />
        <CardListaProdutos searchTerm={globalSearchTerm} />
      </ContainerCarrinho>
    </Container>
  );
}

export default ListaProdutos;
