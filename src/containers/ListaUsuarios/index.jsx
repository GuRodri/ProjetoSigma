import React from 'react';
import { NavLink } from 'react-router-dom';
import CardListaUsuarios from '../../components/Cards/CardListaUsuarios';
import { ContainerCarrinho, Container } from './style';
import { useSearch } from '../../context/SearchContext';

function ListaUsuarios() {
  const { globalSearchTerm } = useSearch();

  return (
    <Container>
      <ContainerCarrinho>
        <NavLink to="/cadastro-usuarios">Adicionar</NavLink>
        <CardListaUsuarios searchTerm={globalSearchTerm} />
      </ContainerCarrinho>
    </Container>
  );
}

export default ListaUsuarios;