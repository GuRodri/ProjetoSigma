import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, TituloCadastro, Campos, Label, Button, BCentralizar } from './style';
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
      <Form>
        <Campos>
          <TituloCadastro>Detalhes do Usuário</TituloCadastro>
          <Label>Email</Label>
          <p>{usuario.email}</p>
          <Label>Nome</Label>
          <p>{usuario.nome}</p>
          <Label>Sobrenome</Label>
          <p>{usuario.sobrenome}</p>
          <Label>Senha</Label>
          <p>{usuario.senha}</p>
          <Label>Gênero</Label>
          <p>{usuario.genero}</p>
          <Label>Data de Nascimento</Label>
          <p>{usuario.dataNascimento}</p>
          <Label>Telefone</Label>
          <p>{usuario.telefone}</p>
          <Label>CPF</Label>
          <p>{usuario.cpf}</p>
        </Campos>
      </Form>
      <BCentralizar>
        <Button type="button" onClick={handleVoltar}>Voltar</Button>
      </BCentralizar>
    </Container>
  );
}

export default DetalhesUsuario;
