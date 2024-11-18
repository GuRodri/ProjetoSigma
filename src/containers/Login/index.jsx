import React, { useState } from "react";
import { Campos, Container, Form, InputContainer, Input, Texto, EyeIconButton } from "./style";
import BContinuar from "../../components/Button/Continuar";
import useAuthentication from "../../hooks/userAuthentication";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Sanitização para evitar caracteres potencialmente perigosos no e-mail e na senha
const sanitizeEmail = (input) => input.replace(/[^\w@.-]/g, ""); // Permite letras, números, @, ., e -
const sanitizePassword = (input) => input.replace(/[<>]/g, ""); // Remove apenas caracteres < e >, comuns em tentativas de injeção

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login, loading, error } = useAuthentication();

    const handleEmailChange = (e) => {
        setEmail(sanitizeEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        setPassword(sanitizePassword(e.target.value)); // Aplica sanitização na senha
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

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
                    <Input type="email" value={email} onChange={handleEmailChange} required />
                </Campos>
                <Campos>
                    <label>Senha</label>
                    <InputContainer>
                        <Input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <EyeIconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </EyeIconButton>
                    </InputContainer>
                </Campos>
                <Texto>
                    <span>
                        <NavLink to="/recuperar-senha">
                            Esqueceu a senha?
                        </NavLink>
                    </span>
                    <p>Não tem conta?<span>
                        <NavLink to="/cadastro-usuarios">
                            Cadastre-se
                        </NavLink></span>
                    </p>
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
