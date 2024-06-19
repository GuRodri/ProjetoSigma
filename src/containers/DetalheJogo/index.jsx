import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, TituloCadastro, Campos, Label, Button, BCentralizar, ContainerEspacamento } from './style';
import apiCliente from '../../services/apiCliente';

function DetalhesJogo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jogo, setJogo] = useState({
    nomeJogo: '',
    categoriaJogo: '',
    processadorRequerido: '',
    memoriaRAMRequerida: '',
    placaVideoRequerida: '',
    espacoDiscoRequerido: '',
    referenciaImagemJogo: '',
    data: '',
  });

  useEffect(() => {
    const fetchJogo = async () => {
      try {
        const response = await apiCliente.get(`/api/Jogo/${id}`);
        setJogo(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogo: ', error);
      }
    };

    fetchJogo();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <ContainerEspacamento>
        <TituloCadastro>Detalhes do Jogo</TituloCadastro>
        <Form>
          <img src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" width='250em'/>
          <Campos>
            <Label>Nome do Jogo</Label>
            <p>{jogo.nomeJogo}</p>
            <Label>Categoria do Jogo</Label>
            <p>{jogo.categoriaJogo}</p>
            <Label>Processador Requerido</Label>
            <p>{jogo.processadorRequerido}</p>
            <Label>Memória RAM Requerida</Label>
            <p>{jogo.memoriaRAMRequerida}</p>
            <Label>Placa de Vídeo Requerida</Label>
            <p>{jogo.placaVideoRequerida}</p>
            <Label>Espaço em Disco Requerido</Label>
            <p>{jogo.espacoDiscoRequerido}</p>
            <Label>Data de Criação</Label>
            <p>{jogo.data}</p>
          </Campos>
        </Form>
        <BCentralizar>
          <Button type="button" onClick={handleVoltar}>Voltar</Button>
        </BCentralizar>
      </ContainerEspacamento> 
    </Container>
  );
}

export default DetalhesJogo;
