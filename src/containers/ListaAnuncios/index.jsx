import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerCarrinho, Container, ContainerBotao, CabecalhoFixo } from './style';
import apiCliente from '../../services/apiCliente';
import CardListaAnuncios from '../../components/Cards/CardListaAnuncios';
import { useSearch } from '../../context/searchCoxtexto';

const ListaAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [filteredAnuncios, setFilteredAnuncios] = useState([]);
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch();

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/Anuncio');
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

  useEffect(() => {
    setGlobalSearchTerm('');
  }, [setGlobalSearchTerm]);

  return (
    <Container>
      <h2>Lista de Anúncios</h2>

      <ContainerBotao>
        <NavLink className='adicionar' to="/cadastro-anuncios">Adicionar</NavLink>
      </ContainerBotao>

      <CabecalhoFixo>
        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
      </CabecalhoFixo>

      <ContainerCarrinho>
        <table>
          <tbody>
            {filteredAnuncios.map((anuncio) => (
              <CardListaAnuncios
                key={anuncio.idAnuncio}
                anuncio={anuncio}
              />
            ))}
          </tbody>
        </table>
      </ContainerCarrinho>
    </Container>
  );
};

export default ListaAnuncios;
