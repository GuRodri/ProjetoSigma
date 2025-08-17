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
import { Trash2, Info, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../services/apiCliente';
import CardListaJogos from '../../components/Cards/CardListaJogos';
import { useSearch } from '../../context/searchCoxtexto';
import CardCabecalhoJogo from '../../components/Cards/CardCabecalhoJogo';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);
  const [filteredJogos, setFilteredJogos] = useState([]);
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch(); // Obtendo o termo de pesquisa global do contexto

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await apiCliente.get('/api/Jogo');
        console.log('Dados recebidos do backend:', response.data);
        const jogosAtivos = response.data.filter(jogo => jogo.ativo);
        setJogos(jogosAtivos);
        setFilteredJogos(jogosAtivos);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };
    fetchJogos();
  }, []);

  useEffect(() => {
    if (!globalSearchTerm) {
      setFilteredJogos(jogos);
      return;
    }
    const filtered = jogos.filter(jogo =>
      jogo.nomeJogo.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredJogos(filtered);
  }, [globalSearchTerm, jogos]);

  useEffect(() => {
    // Limpa o termo de busca global ao montar a página ListaJogos
    setGlobalSearchTerm('');
  }, [setGlobalSearchTerm]);

  const navigate = useNavigate();

  const handleDisableJogo = async (id) => {
    try {
      await apiCliente.patch(`/api/Jogo/${id}/disable`);
      alert('Jogo desabilitado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao desabilitar jogo. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => navigate(`/detalhes-jogo/${id}`);
  const handleEditar = (id) => navigate(`/editar-jogos/${id}`);

  return (
    <Container>
      <Header>
        <Title>Lista de Jogos</Title>
        <AddButton to="/cadastro-jogos">+ Adicionar Jogo</AddButton>
      </Header>

      {filteredJogos.length === 0 ? (
        <FeedbackMessage>Nenhum jogo encontrado.</FeedbackMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredJogos.map((jogo) => (
                <tr key={jogo.idJogo}>
                  <td>
                    <TableImage src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" />
                  </td>
                  <td>{jogo.nomeJogo}</td>
                  <td>{jogo.categoriaJogo}</td>
                  <td>
                    <TableAction>
                      <Trash2 color="#FF4D4F" size={22} title="Desabilitar" onClick={() => handleDisableJogo(jogo.idJogo)} />
                      <Edit2 color="#FFA500" size={22} title="Editar" onClick={() => handleEditar(jogo.idJogo)} />
                      <Info color="#25D62C" size={22} title="Detalhes" onClick={() => handleDetalhes(jogo.idJogo)} />
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

export default ListaJogos;
