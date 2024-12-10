import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import {  Campos,  Container,  Form,  InputContainer,  Input,  Texto,  EyeIconButton,} from "./style";
import BContinuar from "../../components/Button/Continuar";
import useAuthentication from "../../hooks/userAuthentication";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Sanitização para evitar caracteres potencialmente perigosos no e-mail e na senha
const sanitizeEmail = (input) => input.replace(/[^\w@.-]/g, ""); // Permite letras, números, @, ., e -
const sanitizePassword = (input) => input.replace(/[<>]/g, ""); // Remove apenas caracteres < e >

// Validação de e-mail
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { login, loading, error } = useAuthentication();

  // Debounce para validação de e-mail
  const validateEmailDebounced = useCallback(
    debounce((email) => {
      if (email && !validateEmail(email)) {
        setEmailError("E-mail inválido.");
      } else {
        setEmailError("");
      }
    }, 500),
    []
  );

  const handleEmailChange = (e) => {
    const sanitizedEmail = sanitizeEmail(e.target.value);
    setEmail(sanitizedEmail);
    validateEmailDebounced(sanitizedEmail);
  };

  const handlePasswordChange = (e) => {
    setPassword(sanitizePassword(e.target.value)); // Aplica sanitização na senha
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações finais antes do envio
    if (!email) {
      setEmailError("E-mail é obrigatório.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("E-mail inválido.");
      return;
    }
    setEmailError(""); // Limpa erros

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
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
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
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </EyeIconButton>
          </InputContainer>
        </Campos>
        <Texto>
          <span>
            <NavLink to="/recuperar-senha">Esqueceu a senha?</NavLink>
          </span>
          <p>
            Não tem conta?
            <span>
              <NavLink to="/cadastro-usuarios">Cadastre-se</NavLink>
            </span>
          </p>
        </Texto>
        <BContinuar type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Continuar"}
        </BContinuar>
        {error && <p>Ocorreu um erro ao fazer login: {error.message}</p>}
      </Form>
    </Container>
  );
};

export default Login;
