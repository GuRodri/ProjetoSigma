import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Header,
  AddButton,
  Title,
  FeedbackMessage,
  TableWrapper,
  StyledTable,
  TableAction
} from './style';
import { Trash2, Info, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../services/apiCliente';
import { useSearch } from '../../context/searchCoxtexto';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = React.useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = React.useState([]);
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await apiCliente.get('/api/Usuario');
        const usuariosAtivos = response.data.filter(usuario => usuario.ativo);
        setUsuarios(usuariosAtivos);
        setFilteredUsuarios(usuariosAtivos);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };
    fetchUsuarios();
  }, []);

  React.useEffect(() => {
    if (!globalSearchTerm) {
      setFilteredUsuarios(usuarios);
      return;
    }
    const filtered = usuarios.filter(usuario =>
      usuario.nome.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredUsuarios(filtered);
  }, [globalSearchTerm, usuarios]);

  React.useEffect(() => {
    setGlobalSearchTerm('');
  }, [setGlobalSearchTerm]);

  const handleDisableUsuario = async (id) => {
    try {
      await apiCliente.patch(`/api/Usuario/${id}/disable`);
      alert('Usuário desabilitado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao desabilitar usuário. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => navigate(`/detalhes-usuario/${id}`);
  const handleEditar = (id) => navigate(`/editar-usuarios/${id}`);

  return (
    <Container>
      <Header>
        <Title>Lista de Usuários</Title>
        <AddButton to="/cadastro-usuarios">+ Adicionar Usuário</AddButton>
      </Header>

      {filteredUsuarios.length === 0 ? (
        <FeedbackMessage>Nenhum usuário encontrado.</FeedbackMessage>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Gênero</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsuarios.map((usuario) => (
                <tr key={usuario.idUsuario}>
                  <td>{usuario.idUsuario}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.genero}</td>
                  <td>
                    <TableAction>
                      <Trash2 color="#FF4D4F" size={22} title="Desabilitar" onClick={() => handleDisableUsuario(usuario.idUsuario)} />
                      <Edit2 color="#FFA500" size={22} title="Editar" onClick={() => handleEditar(usuario.idUsuario)} />
                      <Info color="#25D62C" size={22} title="Detalhes" onClick={() => handleDetalhes(usuario.idUsuario)} />
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
}

export default ListaUsuarios;
