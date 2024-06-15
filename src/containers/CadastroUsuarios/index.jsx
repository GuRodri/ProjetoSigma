import React, { useState } from 'react';
import BCadastrar from "../../components/Button/Cadastrar";
import { Campos, Campos1, CamposMenores, CamposMenoresSubdivisao, Linhas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro, Linhas2, P1 } from "./style";
import useSignup from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import PoliticaPrivacidade from '../../components/PoliticaPrivacidade';

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

    const { signup, loading, error } = useSignup();

    const navigate = useNavigate();

    const handleRoleChange = (e) => {
        setRole(parseInt(e.target.value)); // Converte o valor para número inteiro
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        console.log({ email, nome, sobrenome, cpf, senha: password, genero, dataNascimento, telefone, role });

        try {
            await signup({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf, role });
            navigate('/');

        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
        }
    };

            const [modalIsOpen, setModalIsOpen] = useState(false);

        const handleOpenModal = () => {
        setModalIsOpen(true);
        };

        const handleCloseModal = () => {
        setModalIsOpen(false);
        };

    return (
        <Container>
            <Form onSubmit={handleSignup}>
                <TituloCadastro>Cadastro Usuários</TituloCadastro>
                <ContainerColunas>
                    <Linhas>
                        <Campos>
                            <label>Nome</label>
                            <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </Campos>
                        <Campos>
                            <label>Sobrenome</label>
                            <Input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <Campos>
                            <label>Email</label>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Campos>
                        <Campos>
                            <label>CPF</label>
                            <Input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        </Campos>
                    </Linhas>
                    <Linhas>
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
                                <label>Nascimento</label>
                                <Input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                            </CamposMenoresSubdivisao>
                        </CamposMenores>
                        <Campos>
                            <label>Telefone</label>
                            <Input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />    
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <Campos style={{ width: role === UserRole.ADMIN ? '100%' : '49%'}}>
                            <label>Senha</label>
                            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />  
                        </Campos>
                        <Campos style={{ display: role === UserRole.ADMIN ? 'block' : 'none' }}>
                            <label>Tipo de Usuario</label>
                            <Select1 value={role} onChange={handleRoleChange}>
                                <option value={UserRole.COMUM}>Comum</option>
                                <option value={UserRole.ADMIN}>Admin</option>
                            </Select1>
                        </Campos>
                    </Linhas>
                </ContainerColunas>
                    <div>
                        <P1>Ao clicar em "Cadastrar", aceito os Termos e condições e autorizo o uso dos meus dados de acordo com a Declaração de <a href="#" onClick={handleOpenModal}>Política de Privacidade</a>.</P1>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={handleCloseModal}
                            contentLabel="Política de Privacidade"
                        >
                            <PoliticaPrivacidade />
                        </Modal>
                    </div>
                <BCadastrar type="submit" disabled={loading} />
                {loading && <p>Aguarde enquanto o cadastro está sendo processado...</p>}
                {error && <p>Ocorreu um erro ao cadastrar o usuário: {error.message}</p>}
            </Form>
        </Container>
    );
}

export default CadastroUsuarios;
