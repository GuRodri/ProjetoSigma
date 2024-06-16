import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CardListaUsuarios from '../../components/Cards/CardListaUsuarios';
import { ContainerCarrinho, Container, ContainerBotao } from './style';
import { useSearch } from '../../context/searchCoxtexto';
import CardCabecalhoUsuario from '../../components/Cards/CardCabecalhoUsuario';

function ListaUsuarios() {
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch(); // Obtenha o termo de busca global e a função para defini-lo

  useEffect(() => {
    setGlobalSearchTerm(''); // Limpe o termo de busca global ao montar a página ListaUsuarios
  }, [setGlobalSearchTerm]); // Certifique-se de adicionar setGlobalSearchTerm como dependência para garantir que useEffect seja chamado corretamente

  return (
    <Container>
      <h2>Lista de Usuários</h2>
      <ContainerCarrinho>
        <ContainerBotao>
          <NavLink className='adicionar' to="/cadastro-usuarios">Adicionar</NavLink>
        </ContainerBotao>
        <CardCabecalhoUsuario />
        <CardListaUsuarios searchTerm={globalSearchTerm} />
      </ContainerCarrinho>
    </Container>
  );
}

export default ListaUsuarios;
