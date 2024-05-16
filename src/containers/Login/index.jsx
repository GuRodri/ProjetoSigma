import React from "react";
import { Campos, Container, Form, Input, Texto } from "./style";
import BContinuar from "../../components/Button/Continuar";

function Login() {
    return (
      <Container>
        <Form>
            <h3>Login</h3>
            <Campos>
                <label>Email</label>
                <Input type="email" placeholder="E-mail" />
            </Campos>
            <Campos>
                <label>Senha</label>
                <Input type="password" placeholder="Senha" />
            </Campos>
            <Texto>
                <p>Esqueceu a senha?</p>
                <span>Não tem conta? Cadastre-se</span>
            </Texto>
            <BContinuar />
        </Form>


      </Container>
    );
}

export default Login;