import React, { useState } from 'react';
import BCadastrar from "../../components/Button/Cadastrar";
import { Campos, CamposMenores, CamposMenoresSubdivisao, Colunas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro } from "./style";
import EstiloInputData from "../../components/Inputs/EstiloInput";
import apiCliente from "../../services/apiCliente";

// Enumeração com valores numéricos
const UserRole = {
  COMUM: 0,
  ADMIN: 1,
};

function CadastroUsuarios() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [role, setRole] = useState(UserRole.COMUM);

    const handleRoleChange = (e) => {
      setRole(parseInt(e.target.value)); // Converte o valor para número inteiro
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            // Envia os dados do usuário para o backend usando a instância apiCliente
            await apiCliente.post('/api/usuario', { 
                email,
                nome,
                sobrenome,
                cpf,
                senha: password,
                genero,
                dataNascimento,
                telefone,
                role
            });

            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            alert(error.message);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSignup}>
                <TituloCadastro>Cadastro Usuários</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <Campos>
                            <label>Nome</label>
                            <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </Campos>
                        <Campos>
                            <label>Email</label>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Campos>
                        <Campos>
                            <label>Senha</label>
                            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Campos>
                    </Colunas>
                    <Colunas>
                        <Campos>
                            <label>Sobrenome</label>
                            <Input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                        </Campos>
                        <CamposMenores>
                            <CamposMenoresSubdivisao>
                                <label>Gênero</label>
                                <Select1 value={genero} onChange={(e) => setGenero(e.target.value)}>
                                    <option value="">Selecione</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </Select1>
                            </CamposMenoresSubdivisao>
                            <CamposMenoresSubdivisao>
                                <label>Data de Nasc</label>
                                <EstiloInputData type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                            </CamposMenoresSubdivisao>
                        </CamposMenores>
                        <Campos>
                            <label>Telefone</label>
                            <Input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </Campos>
                        <Campos>
                            <label>CPF</label>
                            <Input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        </Campos>
                        <Campos>
                            <label>Role</label>
                            <Select1 value={role} onChange={handleRoleChange}>
                                <option value={UserRole.COMUM}>Comum</option>
                                <option value={UserRole.ADMIN}>Admin</option>
                            </Select1>
                        </Campos>
                    </Colunas>
                </ContainerColunas>
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroUsuarios;
