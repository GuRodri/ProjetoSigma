import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Form,
  TituloCadastro,
  Campos,
  Label,
  Input,
  CamposMenores,
  CamposMenoresSubdivisao2,
  Button,
  ContainerEspacamento,
  BCentralizar
} from './style';
import apiCliente from '../../services/apiCliente';
import { useNavigate } from 'react-router-dom';

function EditarProduto() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o ID da rota
  const [produto, setProduto] = useState({
    nomeProduto: '',
    descricaoProduto: '',
    preco: 0,
    quantidadeEstoque: 0,
    categoria: '',
    marca: '',
    imagemProduto: '',
    fichaTecnica: '',
    data: '',
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        // Faz a requisição para obter os dados do produto com base no ID
        const response = await apiCliente.get(`/api/produto/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto: ', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      // Faz a requisição para atualizar os dados do produto com base no ID
      await apiCliente.put(`/api/produto/${id}`, produto);
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar produto: ', error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };
  
  return (
    <Container>
      <ContainerEspacamento>
        <Form onSubmit={handleUpdate}>
          <TituloCadastro>Editar Produto</TituloCadastro>
          <Campos>
            <Label>Nome do Produto</Label>
            <Input
              type="text"
              name="nomeProduto"
              value={produto.nomeProduto}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Descrição do Produto</Label>
            <Input
              type="text"
              name="descricaoProduto"
              value={produto.descricaoProduto}
              onChange={handleChange}
              required
            />
          </Campos>
          <CamposMenores>
            <CamposMenoresSubdivisao2>
              <Label>Preço</Label>
              <Input
                type="number"
                name="preco"
                step="0.01"
                min="0.01"
                value={produto.preco}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
            <CamposMenoresSubdivisao2>
              <Label>Quantidade em Estoque</Label>
              <Input
                type="number"
                name="quantidadeEstoque"
                min="0"
                value={produto.quantidadeEstoque}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
          </CamposMenores>
          <Campos>
            <Label>Categoria</Label>
            <Input
              type="text"
              name="categoria"
              value={produto.categoria}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Marca</Label>
            <Input
              type="text"
              name="marca"
              value={produto.marca}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Imagem do Produto</Label>
            <Input
              type="url"
              name="imagemProduto"
              value={produto.imagemProduto}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Ficha Técnica</Label>
            <Input
              type="text"
              name="fichaTecnica"
              value={produto.fichaTecnica}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Data de Criação</Label>
            <Input
              type="date"
              name="data"
              value={produto.data}
              onChange={handleChange}
              required
            />
          </Campos>
          <BCentralizar>
            <Button type="submit">Atualizar</Button>
            <Button type="button" onClick={handleVoltar}>Voltar</Button>
          </BCentralizar>
        </Form>
      </ContainerEspacamento>
    </Container>
  );
}

export default EditarProduto;
