/*import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/autContexto1'; // Importe o contexto de autenticação
import BCadastrar from "../../components/Button/Cadastrar";
import { Campos, CamposMenores, CamposMenoresSubdivisao, Linhas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro, P1 } from "./style";
import useSignup from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import PoliticaPrivacidade from '../../components/PoliticaPrivacidade';
import TermosDeUso from '../../components/TermosUso';
import InputMask from 'react-input-mask';

const UserRole = {
    COMUM: 0,
    ADMIN: 1,
};

function CadastroUsuarios() {
    const { currentUser } = useContext(AuthContext); // Consuma o contexto para obter o currentUser

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [role, setRole] = useState(UserRole.COMUM);
    const [modalPoliticaPrivacidadeIsOpen, setModalPoliticaPrivacidadeIsOpen] = useState(false);
    const [modalTermosDeUsoIsOpen, setModalTermosDeUsoIsOpen] = useState(false);

    const { signup, loading, error } = useSignup();
    const navigate = useNavigate();

    const handleRoleChange = (e) => {
        setRole(parseInt(e.target.value)); // Converte o valor para número inteiro
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            await signup({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf, role });
            navigate('/');

        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
        }
    };

    const handleOpenPoliticaPrivacidadeModal = () => {
        setModalPoliticaPrivacidadeIsOpen(true);
    };

    const handleClosePoliticaPrivacidadeModal = () => {
        setModalPoliticaPrivacidadeIsOpen(false);
    };

    const handleOpenTermosDeUsoModal = () => {
        setModalTermosDeUsoIsOpen(true);
    };

    const handleCloseTermosDeUsoModal = () => {
        setModalTermosDeUsoIsOpen(false);
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
                            <InputMask 
                                mask="999.999.999-99" 
                                value={cpf} 
                                onChange={(e) => setCpf(e.target.value)} 
                                placeholder="CPF"
                            >
                                {(inputProps) => <Input {...inputProps} type="text" required />}
                            </InputMask>
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
                            <InputMask 
                                mask="(99) 99999-9999" 
                                value={telefone} 
                                onChange={(e) => setTelefone(e.target.value)} 
                                placeholder="Telefone"
                            >
                                {(inputProps) => <Input {...inputProps} type="tel" required />}
                            </InputMask>
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <Campos style={{ width: '100%' }}>
                            <label>Senha</label>
                            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Campos>
                        {currentUser && currentUser.role === UserRole.ADMIN && (
                            <Campos>
                                <label>Tipo de Usuário</label>
                                <Select1 value={role} onChange={handleRoleChange}>
                                    <option value={UserRole.COMUM}>Comum</option>
                                    <option value={UserRole.ADMIN}>Admin</option>
                                </Select1>
                            </Campos>
                        )}
                    </Linhas>
                </ContainerColunas>
                <div>
                    <P1>
                        Ao clicar em "Cadastrar", aceito os{' '}
                        <a href="#" onClick={handleOpenTermosDeUsoModal}>
                            Termos e condições
                        </a> e autorizo o uso dos meus dados de acordo com a Declaração de{' '}
                        <a href="#" onClick={handleOpenPoliticaPrivacidadeModal}>
                            Política de Privacidade
                        </a>
                        .
                    </P1>

                    <Modal
                        isOpen={modalTermosDeUsoIsOpen}
                        onRequestClose={handleCloseTermosDeUsoModal}
                        contentLabel="Termos de Uso"
                    >
                        <TermosDeUso />
                        <button 
                            onClick={handleCloseTermosDeUsoModal} 
                            style={{ width: '8em', backgroundColor:'red', color:'#d9d9d9', borderRadius:'6px', padding: '.25em', border:'none'}}
                        >
                            Fechar
                        </button>
                    </Modal>
                    <Modal
                        isOpen={modalPoliticaPrivacidadeIsOpen}
                        onRequestClose={handleClosePoliticaPrivacidadeModal}
                        contentLabel="Política de Privacidade"
                    >
                        <PoliticaPrivacidade />
                        <button 
                            onClick={handleClosePoliticaPrivacidadeModal} 
                            style={{ width: '8em', backgroundColor:'red', color:'#d9d9d9', borderRadius:'6px', padding: '.25em', border:'none'}}
                        >
                            Fechar
                        </button>
                    </Modal>
                </div>
                <BCadastrar type="submit" disabled={loading} />
                {loading && <p>Aguarde enquanto o cadastro está sendo processado...</p>}
                {error && <p>Ocorreu um erro ao cadastrar o usuário: {error.message}</p>}
            </Form>
        </Container>
    );
}

export default CadastroUsuarios;*/
import React, { useContext, useState } from 'react';
import DOMPurify from 'dompurify';
import { AuthContext } from '../../context/autContexto1'; // Importe o contexto de autenticação
import BCadastrar from "../../components/Button/Cadastrar";
import { Campos, CamposMenores, CamposMenoresSubdivisao, Linhas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro, P1 } from "./style";
import useSignup from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import PoliticaPrivacidade from '../../components/PoliticaPrivacidade';
import TermosDeUso from '../../components/TermosUso';
import InputMask from 'react-input-mask';

const UserRole = {
    COMUM: 0,
    ADMIN: 1,
};

function CadastroUsuarios() {
    const { currentUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [role, setRole] = useState(UserRole.COMUM);
    const [modalPoliticaPrivacidadeIsOpen, setModalPoliticaPrivacidadeIsOpen] = useState(false);
    const [modalTermosDeUsoIsOpen, setModalTermosDeUsoIsOpen] = useState(false);

    const { signup, loading, error } = useSignup();
    const navigate = useNavigate();

    const sanitizeInput = (input) => {
        return DOMPurify.sanitize(input);
    };

    const handleRoleChange = (e) => {
        setRole(parseInt(e.target.value)); // Converte o valor para número inteiro
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            // Sanitiza os dados antes de enviar para o backend
            const sanitizedData = {
                email: sanitizeInput(email),
                password: sanitizeInput(password),
                nome: sanitizeInput(nome),
                sobrenome: sanitizeInput(sobrenome),
                genero: sanitizeInput(genero),
                dataNascimento: sanitizeInput(dataNascimento),
                telefone: sanitizeInput(telefone),
                cpf: sanitizeInput(cpf),
                role,
            };

            await signup(sanitizedData);
            navigate('/');

        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
        }
    };

    const handleOpenPoliticaPrivacidadeModal = () => {
        setModalPoliticaPrivacidadeIsOpen(true);
    };

    const handleClosePoliticaPrivacidadeModal = () => {
        setModalPoliticaPrivacidadeIsOpen(false);
    };

    const handleOpenTermosDeUsoModal = () => {
        setModalTermosDeUsoIsOpen(true);
    };

    const handleCloseTermosDeUsoModal = () => {
        setModalTermosDeUsoIsOpen(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSignup}>
                <TituloCadastro>Cadastro Usuários</TituloCadastro>
                <ContainerColunas>
                    <Linhas>
                        <Campos>
                            <label>Nome</label>
                            <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(sanitizeInput(e.target.value))} required />
                        </Campos>
                        <Campos>
                            <label>Sobrenome</label>
                            <Input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(sanitizeInput(e.target.value))} required />
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <Campos>
                            <label>Email</label>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(sanitizeInput(e.target.value))} required />
                        </Campos>
                        <Campos>
                            <label>CPF</label>
                            <InputMask 
                                mask="999.999.999-99" 
                                value={cpf} 
                                onChange={(e) => setCpf(sanitizeInput(e.target.value))} 
                                placeholder="CPF"
                            >
                                {(inputProps) => <Input {...inputProps} type="text" required />}
                            </InputMask>
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <CamposMenores>
                            <CamposMenoresSubdivisao>
                                <label>Gênero</label>
                                <Select1 value={genero} onChange={(e) => setGenero(sanitizeInput(e.target.value))}>
                                    <option value="">Selecione</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </Select1>
                            </CamposMenoresSubdivisao>
                            <CamposMenoresSubdivisao>
                                <label>Nascimento</label>
                                <Input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(sanitizeInput(e.target.value))} />
                            </CamposMenoresSubdivisao>
                        </CamposMenores>
                        <Campos>
                            <label>Telefone</label>
                            <InputMask 
                                mask="(99) 99999-9999" 
                                value={telefone} 
                                onChange={(e) => setTelefone(sanitizeInput(e.target.value))} 
                                placeholder="Telefone"
                            >
                                {(inputProps) => <Input {...inputProps} type="tel" required />}
                            </InputMask>
                        </Campos>
                    </Linhas>
                    <Linhas>
                        <Campos style={{ width: '100%' }}>
                            <label>Senha</label>
                            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(sanitizeInput(e.target.value))} required />
                        </Campos>
                        {currentUser && currentUser.role === UserRole.ADMIN && (
                            <Campos>
                                <label>Tipo de Usuário</label>
                                <Select1 value={role} onChange={handleRoleChange}>
                                    <option value={UserRole.COMUM}>Comum</option>
                                    <option value={UserRole.ADMIN}>Admin</option>
                                </Select1>
                            </Campos>
                        )}
                    </Linhas>
                </ContainerColunas>
                <div>
                    <P1>
                        Ao clicar em "Cadastrar", aceito os{' '}
                        <a href="#" onClick={handleOpenTermosDeUsoModal}>
                            Termos e condições
                        </a> e autorizo o uso dos meus dados de acordo com a Declaração de{' '}
                        <a href="#" onClick={handleOpenPoliticaPrivacidadeModal}>
                            Política de Privacidade
                        </a>.
                    </P1>

                    <Modal
                        isOpen={modalTermosDeUsoIsOpen}
                        onRequestClose={handleCloseTermosDeUsoModal}
                        contentLabel="Termos de Uso"
                    >
                        <TermosDeUso />
                        <button 
                            onClick={handleCloseTermosDeUsoModal} 
                            style={{ width: '8em', backgroundColor:'red', color:'#d9d9d9', borderRadius:'6px', padding: '.25em', border:'none'}}
                        >
                            Fechar
                        </button>
                    </Modal>
                    <Modal
                        isOpen={modalPoliticaPrivacidadeIsOpen}
                        onRequestClose={handleClosePoliticaPrivacidadeModal}
                        contentLabel="Política de Privacidade"
                    >
                        <PoliticaPrivacidade />
                        <button 
                            onClick={handleClosePoliticaPrivacidadeModal} 
                            style={{ width: '8em', backgroundColor:'red', color:'#d9d9d9', borderRadius:'6px', padding: '.25em', border:'none'}}
                        >
                            Fechar
                        </button>
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

