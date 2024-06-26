import React, { useState } from "react";
import { Campos, Container, Form, Input, Texto } from "./style";
import BContinuar from "../../components/Button/Continuar";
import useAuthentication from "../../hooks/userAuthentication";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <Container>
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
                        <span>Esqueceu a senha?</span>
                    </NavLink>
                    <NavLink to="/cadastro-usuarios">
                        <p>Não tem conta?<span> Cadastre-se</span></p>
                    </NavLink>
                </Texto>
                <BContinuar type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Continuar'}
                </BContinuar>
                {error && <p>Ocorreu um erro ao fazer login: {error.message}</p>}
            </Form>
        </Container>
    );
}

export default Login;
