import React from 'react';
import { UnauthorizedContainer, Card, Icon, Title, Message, Button } from './style';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/'); // Redireciona para a home
  };

  return (
    <UnauthorizedContainer>
      <Card>
        <Icon>🚫</Icon>
        <Title>403 - Acesso Negado</Title>
        <Message>Você não tem permissão para acessar esta página.<br />Se acha que isso é um erro, entre em contato com o suporte.</Message>
        <Button onClick={handleBack}>Voltar</Button>
      </Card>
    </UnauthorizedContainer>
  );
};

export default Unauthorized;

