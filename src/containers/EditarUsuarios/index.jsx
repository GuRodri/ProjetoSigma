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
import apiCliente from '../../services/apiCliente';
import { useNavigate } from 'react-router-dom';

function EditarUsuario() {
  const navigate = useNavigate();

  const { id } = useParams(); // Obtém o ID da rota
  const [usuario, setUsuario] = useState({
    email: '',
    nome: '',
    sobrenome: '',
    senha: '',
    genero: '',
    dataNascimento: '',
    telefone: '',
    cpf: '',
    role: 0 // Valor inicial para o campo role
  });

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        // Faz a requisição para obter os dados do usuário com base no ID
        const response = await apiCliente.get(`/api/Usuario/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário: ', error);
      }
    };

    fetchUsuario();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      // Faz a requisição para atualizar os dados do usuário com base no ID
      await apiCliente.put(`/api/Usuario/${id}`, usuario);
      alert('Usuário atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar usuário: ', error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  }; 

  return (
    <Container>
      <Form onSubmit={handleUpdate}>
        <TituloCadastro>Editar Usuário</TituloCadastro>
        <Campos>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Nome</Label>
          <Input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Sobrenome</Label>
          <Input
            type="text"
            name="sobrenome"
            value={usuario.sobrenome}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Senha</Label>
          <Input
            type="password"
            name="senha"
            value={usuario.senha}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Gênero</Label>
          <Input
            type="text"
            name="genero"
            value={usuario.genero}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            name="dataNascimento"
            value={usuario.dataNascimento}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>Telefone</Label>
          <Input
            type="tel"
            name="telefone"
            value={usuario.telefone}
            onChange={handleChange}
            required
          />
        </Campos>
        <Campos>
          <Label>CPF</Label>
          <Input
            type="text"
            name="cpf"
            value={usuario.cpf}
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

export default EditarUsuario;
