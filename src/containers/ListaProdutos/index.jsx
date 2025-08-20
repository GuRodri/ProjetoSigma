import React, { useEffect } from 'react';
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
import { useSearch } from '../../context/searchCoxtexto';

function ListaProdutos() {
  const [produtos, setProdutos] = React.useState([]);
  const [filteredProdutos, setFilteredProdutos] = React.useState([]);
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
        setFilteredProdutos(produtosAtivos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  React.useEffect(() => {
    if (!globalSearchTerm) {
      setFilteredProdutos(produtos);
      return;
    }
    const filtered = produtos.filter(produto =>
      produto.nomeProduto.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredProdutos(filtered);
  }, [globalSearchTerm, produtos]);

  React.useEffect(() => {
    setGlobalSearchTerm('');
  }, [setGlobalSearchTerm]);

  const handleDisableProduto = async (id) => {
    try {
      await apiCliente.patch(`/api/Produto/${id}/disable`);
      alert('Produto desabilitado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao desabilitar produto. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => navigate(`/detalhes-produto/${id}`);
  const handleEditar = (id) => navigate(`/editar-produtos/${id}`);

  return (
    <Container>
      <Header>
        <Title>Lista de Produtos</Title>
        <AddButton to="/cadastro-produtos">+ Adicionar Produto</AddButton>
      </Header>

      {filteredProdutos.length === 0 ? (
        <FeedbackMessage>Nenhum produto encontrado.</FeedbackMessage>
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
              {filteredProdutos.map((produto) => (
                <tr key={produto.idProduto}>
                  <td>
                    <TableImage src={produto.imagemProduto} alt="Imagem do Produto" />
                  </td>
                  <td>{produto.nomeProduto}</td>
                  <td>{produto.categoria}</td>
                  <td>
                    <TableAction>
                      <Trash2 color="#FF4D4F" size={22} title="Desabilitar" onClick={() => handleDisableProduto(produto.idProduto)} />
                      <Edit2 color="#FFA500" size={22} title="Editar" onClick={() => handleEditar(produto.idProduto)} />
                      <Info color="#25D62C" size={22} title="Detalhes" onClick={() => handleDetalhes(produto.idProduto)} />
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

export default ListaProdutos;
