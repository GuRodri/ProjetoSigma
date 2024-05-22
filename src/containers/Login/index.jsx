import React, { useState } from "react";
import { Campos, Container, Form, Input, Texto } from "./style";
import BContinuar from "../../components/Button/Continuar";
import useSignup from '../../hooks/useSignup';
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, loading, error } = useSignup();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Chama a função de signup do hook useSignup
      await signup({ email, password });
    };

    return (
      <Container>
         {error && <p>{error.message}</p>}
        <Form  onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Campos>
                <label>Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Campos>
            <Campos>
                <label>Senha</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Campos>
            <Texto>
                <NavLink to="/recuperar-senha">
                    <p>Esqueceu a senha?</p>
                </NavLink>
                <NavLink to="/cadastro-usuarios">
                    <span>Não tem conta? Cadastre-se</span>
                </NavLink>
            </Texto>
            <BContinuar type="submit" disabled={loading} />
        </Form>


      </Container>
    );
}

export default Login;

/*import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Chama a função de signup do hook useSignup
    await signup({ email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  );
};

export default Login;
*/