import styled from 'styled-components';

// Gradiente moderno com leve transparência
export const ProductDescriptionContainer = styled.div`
  margin-top: 20px;
  padding: 30px;
  min-height: 70vh;
  width: 80%;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(20, 21, 26, 0.95), rgba(37, 38, 43, 0.95));
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: #f1f1f1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5em;
`;

export const ProductDescriptionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #00e676;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

export const ProductDescriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  color: #e0e0e0;
  margin-bottom: 20px;

  /* Estilo para links na descrição */
  a {
    color: #00e5ff;
    text-decoration: none;
    border-bottom: 1px solid #00e5ff;
    transition: color 0.2s ease, border-bottom 0.2s ease;

    &:hover {
      color: #00b8d4;
      border-bottom: 1px solid #00b8d4;
    }
  }
`;
