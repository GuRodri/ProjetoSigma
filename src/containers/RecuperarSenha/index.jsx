import React, { useState } from 'react';
import { notification } from 'antd';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; // Verifique se auth está importado corretamente
import { Container, Form, Input, Button, ForgotPasswordLink } from './style';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const authInstance = getAuth(); // Obtém o objeto de autenticação
      await sendPasswordResetEmail(authInstance, email); // Chama sendPasswordResetEmail com authInstance e email
      notification.success({
        message: 'Email enviado!',
        description: `Um email de redefinição de senha foi enviado para ${email}. Verifique sua caixa de entrada.`,
      });
    } catch (error) {
      console.error('Erro ao enviar email de redefinição de senha:', error.message);
      notification.error({
        message: 'Erro ao enviar email de redefinição de senha',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Item label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleResetPassword} loading={loading}>
            Enviar email de recuperação
          </Button>
        </Form.Item>
        <ForgotPasswordLink to="/login">
          Lembrou a senha? Faça login
        </ForgotPasswordLink>
      </Form>
    </Container>
  );
};

export default ResetPassword;
