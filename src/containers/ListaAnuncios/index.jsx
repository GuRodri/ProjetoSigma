import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerCarrinho, Container } from './style';
import apiCliente from '../../services/apiCliente';
import CardListaAnuncios from '../../components/Cards/CardListaAnuncios';
import { useSearch } from '../../context/searchCoxtexto';

const ListaAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [filteredAnuncios, setFilteredAnuncios] = useState([]);
  const { globalSearchTerm } = useSearch(); // Obtendo o termo de pesquisa global do contexto

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/Anuncio');
        console.log('Dados recebidos do backend:', response.data);
        const anunciosAtivos = response.data.filter(anuncio => anuncio.ativo);
        setAnuncios(anunciosAtivos);
        setFilteredAnuncios(anunciosAtivos);
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
      }
    };
    fetchAnuncios();
  }, []);

  useEffect(() => {
    if (!globalSearchTerm) {
      setFilteredAnuncios(anuncios);
      return;
    }
    const filtered = anuncios.filter(anuncio =>
      anuncio.titulo.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredAnuncios(filtered);
  }, [globalSearchTerm, anuncios]);

  return (
    <Container>
      <h2>Lista de Anúncios</h2>
      <ContainerCarrinho>
        <ul>
          <NavLink to="/cadastro-anuncios">Adicionar</NavLink>
          {filteredAnuncios.map((anuncio) => (
            <CardListaAnuncios
              key={anuncio.idAnuncio}
              anuncio={anuncio}
            />
          ))}
        </ul>
      </ContainerCarrinho>
    </Container>
  );
};

export default ListaAnuncios;
