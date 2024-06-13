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
} from './style';
import BEditar from '../../components/Button/EditarAnuncio';
import apiCliente from '../../services/apiCliente';
import { useNavigate } from 'react-router-dom';

function EditarAnuncio() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o ID da rota
  const [anuncio, setAnuncio] = useState({
    idProduto: '',
    titulo: '',
    descricao: '',
    preco: '',
    data: '',
    referenciaImagem: '',
  });

  useEffect(() => {
    const fetchAnuncio = async () => {
      try {
        // Faz a requisição para obter os dados do anúncio com base no ID
        const response = await apiCliente.get(`/api/Anuncio/${id}`);
        setAnuncio(response.data);
      } catch (error) {
        console.error('Erro ao buscar anúncio: ', error);
      }
    };

    fetchAnuncio();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      // Faz a requisição para atualizar os dados do anúncio com base no ID
      await apiCliente.put(`/api/Anuncio/${id}`, anuncio);
      alert('Anúncio atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar anúncio: ', error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnuncio((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <Form onSubmit={handleUpdate}>
        <TituloCadastro>Editar Anúncio</TituloCadastro>
        <Campos>
          <Label>Título</Label>
          <Input
            type="text"
            name="titulo"
            value={anuncio.titulo}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Descrição</Label>
          <Input
            type="text"
            name="descricao"
            value={anuncio.descricao}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Id Produto</Label>
          <Input
            type="text"
            name="Identificador do produto"
            value={anuncio.idProduto}
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
              value={anuncio.preco}
              onChange={handleChange}
              required
            />
          </CamposMenoresSubdivisao2>
          <CamposMenoresSubdivisao2>
            <Label>Data de Criação</Label>
            <Input
              type="date"
              name="data"
              value={anuncio.data}
              onChange={handleChange}
              required
            />
          </CamposMenoresSubdivisao2>
        </CamposMenores>
        <Campos>
          <Label>Imagem do Anúncio</Label>
          <Input
            type="url"
            name="referenciaImagem"
            value={anuncio.referenciaImagem}
            onChange={handleChange}
            required
          />
        </Campos>
        <Button type="submit">Atualizar</Button>
        
<Button type="button" onClick={handleVoltar}>Voltar</Button>
      </Form>
    </Container>
  );
}

export default EditarAnuncio;