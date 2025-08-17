import styled from 'styled-components';

export const UnauthorizedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #e2e8f0;
  padding: 2rem 1rem;
`;

export const Card = styled.div`
  background: rgba(30, 41, 59, 0.85);
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  padding: 2.5rem 2rem;
  max-width: 400px;
  text-align: center;
  border: 1px solid rgba(239,68,68,0.15);
  position: relative;
`;

export const Icon = styled.div`
  font-size: 3rem;
  color: #ef4444;
  margin-bottom: 1rem;
  animation: shake 1.2s infinite;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.75rem;
`;

export const Message = styled.p`
  font-size: 1.1rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);

  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
