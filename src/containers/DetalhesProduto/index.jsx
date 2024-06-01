import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, TituloCadastro, Campos, Label, Button, BCentralizar } from './style';
import apiCliente from '../../services/apiCliente';

function DetalhesProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    idProduto: '',
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
        const response = await apiCliente.get(`/api/produto/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto: ', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <Form>
        <Campos>
          <TituloCadastro>Detalhes do Produto</TituloCadastro>
          <Label>Nome do Produto</Label>
          <p>{produto.nomeProduto}</p>
          <Label>Descrição do Produto</Label>
          <p>{produto.descricaoProduto}</p>
          <Label>Preço</Label>
          <p>{produto.preco}</p>
          <Label>Quantidade em Estoque</Label>
          <p>{produto.quantidadeEstoque}</p>
          <Label>Categoria</Label>
          <p>{produto.categoria}</p>
          <Label>Marca</Label>
          <p>{produto.marca}</p>
          <Label>Ficha Técnica</Label>
          <p>{produto.fichaTecnica}</p>
          <Label>Data de Criação</Label>
          <p>{produto.data}</p>
        </Campos>
        <img src={produto.imagemProduto} alt="Imagem do Produto" width='300em' />
      </Form>
      <BCentralizar>
        <Button type="button" onClick={handleVoltar}>Voltar</Button>
      </BCentralizar>
    </Container>
  );
}

export default DetalhesProduto;