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
  BCentralizar,
  ContainerEspacamento
} from './style';
import apiCliente from '../../services/apiCliente';
import { useNavigate } from 'react-router-dom';

function EditarJogo() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o ID da rota
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
        // Faz a requisição para obter os dados do jogo com base no ID
        const response = await apiCliente.get(`/api/Jogo/${id}`);
        setJogo(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogo: ', error);
      }
    };

    fetchJogo();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      // Faz a requisição para atualizar os dados do jogo com base no ID
      await apiCliente.put(`/api/Jogo/${id}`, jogo);
      alert('Jogo atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar jogo: ', error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJogo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };
  
  return (
    <Container>
      <ContainerEspacamento>
        <Form onSubmit={handleUpdate}>
          <TituloCadastro>Editar Jogo</TituloCadastro>
          <Campos>
            <Label>Nome do Jogo</Label>
            <Input
              type="text"
              name="nomeJogo"
              value={jogo.nomeJogo}
              onChange={handleChange}
              required
            />
          </Campos>
          <Campos>
            <Label>Categoria do Jogo</Label>
            <Input
              type="text"
              name="categoriaJogo"
              value={jogo.categoriaJogo}
              onChange={handleChange}
              required
            />
          </Campos>
          <CamposMenores>
            <CamposMenoresSubdivisao2>
              <Label>Processador Requerido</Label>
              <Input
                type="text"
                name="processadorRequerido"
                value={jogo.processadorRequerido}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
            <CamposMenoresSubdivisao2>
              <Label>Memória RAM Requerida</Label>
              <Input
                type="text"
                name="memoriaRAMRequerida"
                value={jogo.memoriaRAMRequerida}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
          </CamposMenores>
          <CamposMenores>
            <CamposMenoresSubdivisao2>
              <Label>Placa de Vídeo Requerida</Label>
              <Input
                type="text"
                name="placaVideoRequerida"
                value={jogo.placaVideoRequerida}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
            <CamposMenoresSubdivisao2>
              <Label>Espaço em Disco Requerido</Label>
              <Input
                type="text"
                name="espacoDiscoRequerido"
                value={jogo.espacoDiscoRequerido}
                onChange={handleChange}
                required
              />
            </CamposMenoresSubdivisao2>
          </CamposMenores>
          <Campos>
            <Label>Referência da Imagem do Jogo</Label>
            <Input
              type="url"
              name="referenciaImagemJogo"
              value={jogo.referenciaImagemJogo}
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

export default EditarJogo;
