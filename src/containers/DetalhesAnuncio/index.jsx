import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, TituloCadastro, Campos, Label, Button, BCentralizar, ContainerEspacamento } from './style';
import apiCliente from '../../services/apiCliente';

function DetalhesAnuncio() {
  const { id } = useParams();
  const navigate = useNavigate();
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
        const response = await apiCliente.get(`/api/Anuncio/${id}`);
        setAnuncio(response.data);
      } catch (error) {
        console.error('Erro ao buscar anúncio: ', error);
      }
    };

    fetchAnuncio();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <ContainerEspacamento>
      <TituloCadastro>Detalhes do Anúncio</TituloCadastro>
      <Form>
        <Campos>
          <Label>Título</Label>
          <p>{anuncio.titulo}</p>
          <Label>Descrição</Label>
          <p>{anuncio.descricao}</p>
          <Label>Preço</Label>
          <p>{anuncio.preco}</p>
          <Label>Data de Criação</Label>
          <p>{anuncio.data}</p>
        </Campos>
          <img src={anuncio.referenciaImagem} alt="Imagem do Anúncio" width='500em'/>
        <Campos>
        </Campos>
      </Form>
        <BCentralizar>
          <Button type="button" onClick={handleVoltar}>Voltar</Button>
        </BCentralizar>
      </ContainerEspacamento>
    </Container>
  );
}

export default DetalhesAnuncio;
