import React from 'react';
import { NavLink } from 'react-router-dom';
import CardListaUsuarios from '../../components/Cards/CardListaUsuarios';
import { ContainerCarrinho, Container } from './style';
import { useSearch } from '../../context/searchContext';

function ListaUsuarios() {
  const { globalSearchTerm } = useSearch();

  return (
    <Container>
      <h2>Lista de Usuarios</h2>
      <ContainerCarrinho>
        <NavLink to="/cadastro-usuarios">Adicionar</NavLink>
        <CardListaUsuarios searchTerm={globalSearchTerm} />
      </ContainerCarrinho>
    </Container>
  );
}

export default ListaUsuarios;