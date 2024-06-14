import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, TituloCadastro, Campos, Label, Button, BCentralizar, ContainerEspacamento, Campos1, CampoMenor } from './style';
import apiCliente from '../../services/apiCliente';

function DetalhesUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: '',
    nome: '',
    sobrenome: '',
    senha: '',
    genero: '',
    dataNascimento: '',
    telefone: '',
    cpf: '',
    role: 0
  });

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await apiCliente.get(`/api/Usuario/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário: ', error);
      }
    };

    fetchUsuario();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <ContainerEspacamento>
      <Form>
        <Campos1>
          <TituloCadastro>Detalhes do Usuário</TituloCadastro>
          <Campos>
            <CampoMenor>
              <Label>Nome</Label>
              <p>{usuario.nome}</p>
            </CampoMenor>
            <CampoMenor>
              <Label>Sobrenome</Label>
              <p>{usuario.sobrenome}</p>
            </CampoMenor>
            <CampoMenor>
              <Label>Email</Label>
              <p>{usuario.email}</p>
            </CampoMenor>
          </Campos>
          <Campos>
            <CampoMenor>
              <Label>Senha</Label>
              <p>{usuario.senha}</p>
            </CampoMenor>
            <CampoMenor>
            <Label>Gênero</Label>
            <p>{usuario.genero}</p>
            </CampoMenor>
            <CampoMenor>
              <Label>Data de Nascimento</Label>
              <p>{usuario.dataNascimento}</p>
            </CampoMenor> 
          </Campos>
          <Campos>
            <CampoMenor>
              <Label>Telefone</Label>
              <p>{usuario.telefone}</p>
            </CampoMenor>
            <CampoMenor>
              <Label>CPF</Label>
              <p>{usuario.cpf}</p>
            </CampoMenor>           
          </Campos>  
        </Campos1>
      </Form>
      <BCentralizar>
        <Button type="button" onClick={handleVoltar}>Voltar</Button>
      </BCentralizar>
      </ContainerEspacamento>
    </Container>
  );
}

export default DetalhesUsuario;
