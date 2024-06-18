import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; // Verifique se auth está importado corretamente

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
        <div style={{ maxWidth: 400, margin: 'auto', marginTop: 50 }}>
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
                <p>
                    Lembrou a senha? <Link to="/login">Faça login</Link>
                </p>
            </Form>
        </div>
    );
};

export default ResetPassword;
