import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Header,
  AddButton,
  Title,
  FeedbackMessage,
  TableWrapper,
  StyledTable,
  TableImage,
  TableAction
} from './style';
import { Trash2, Info, Edit2, ImagePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleDisableAnuncio = async (id) => {
    try {
      await apiCliente.patch(`/api/Anuncio/${id}/disable`);
      alert('Anúncio desabilitado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao desabilitar anúncio. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => navigate(`/detalhes-anuncios/${id}`);
  const handleEditar = (id) => navigate(`/editar-anuncios/${id}`);
  const handleCadastroImagem = (id) => navigate(`/cadastrar-imagem-anuncio/${id}`);

  return (
    <Container>
      <Header>
        <Title>Lista de Anúncios</Title>
        <AddButton to="/cadastro-anuncios">+ Adicionar Anúncio</AddButton>
      </Header>

      {filteredAnuncios.length === 0 ? (
        <FeedbackMessage>Nenhum anúncio encontrado.</FeedbackMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Título</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnuncios.map((anuncio) => (
                <tr key={anuncio.idAnuncio}>
                  <td>
                    <TableImage src={anuncio.referenciaImagem} alt="Imagem do Anúncio" />
                  </td>
                  <td>{anuncio.titulo}</td>
                  <td>
                    <TableAction>
                      <Trash2 color="#FF4D4F" size={22} title="Desabilitar" onClick={() => handleDisableAnuncio(anuncio.idAnuncio)} />
                      <Edit2 color="#FFA500" size={22} title="Editar" onClick={() => handleEditar(anuncio.idAnuncio)} />
                      <Info color="#25D62C" size={22} title="Detalhes" onClick={() => handleDetalhes(anuncio.idAnuncio)} />
                      <ImagePlus color="#3BA4D1" size={22} title="Cadastrar Imagem" onClick={() => handleCadastroImagem(anuncio.idAnuncio)} />
                    </TableAction>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}
    </Container>
  );
};

export default ListaAnuncios;
