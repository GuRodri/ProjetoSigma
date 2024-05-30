import React, { useState } from "react";
import { Campos, Container, Form, Input, Texto } from "./style";
import BContinuar from "../../components/Button/Continuar";
import useAuthentication from "../../hooks/userAuthentication";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem de sucesso ou erro
    const { login, loading, error } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
            alert('Login efetuado com sucesso!'); // Define a mensagem de sucesso
        } catch (error) {
            alert('Erro ao efetuar login. Verifique suas credenciais.'); // Define a mensagem de erro
        }
    };

    return (
        <Container>
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Exibição do erro */}
            {message && <p>{message}</p>} {/* Exibição da mensagem de sucesso ou erro */}
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Campos>
                    <label>Email</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Campos>
                <Campos>
                    <label>Senha</label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Campos>
                <Texto>
                    <NavLink to="/recuperar-senha">
                        <p>Esqueceu a senha?</p>
                    </NavLink>
                    <NavLink to="/cadastro-usuarios">
                        <span>Não tem conta? Cadastre-se</span>
                    </NavLink>
                </Texto>
                <BContinuar type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Continuar'}
                </BContinuar>
            </Form>
        </Container>
    );
}

export default Login;