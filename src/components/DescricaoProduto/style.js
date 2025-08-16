import styled from 'styled-components';

// Container da descrição do produto - harmonizado com a página de produto
export const ProductDescriptionContainer = styled.div`
  width: 100%;
  max-width: 1000px; /* Igual ao ContainerEspacamento da página de produto */
  padding: 1.5rem;
  border-radius: 0.875rem; /* Igual ao ContainerEspacamento */
  background: rgba(30, 41, 59, 0.4); /* Igual ao ContainerEspacamento */
  backdrop-filter: blur(15px);
  border: 1px solid rgba(16, 185, 129, 0.15); /* Igual ao ContainerEspacamento */
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(16, 185, 129, 0.1); /* Igual ao ContainerEspacamento */
  color: #f8fafc;
  transition: all 0.3s ease;
  margin: 0 auto 1.5rem auto; /* Centralizando com margin auto */
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.25),
      0 0 20px rgba(16, 185, 129, 0.05);
    border-color: rgba(16, 185, 129, 0.2);
  }

  @media (max-width: 1024px) {
    max-width: 95%;
    margin: 0 auto 1.25rem auto; /* Centralizando em todas as resoluções */
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto 1.25rem auto; /* Centralizando */
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto 1rem auto; /* Centralizando */
    padding: 1rem;
    border-radius: 0.625rem;
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.25rem; /* Reduzido de 0.5rem para 0.25rem */
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 0.2rem; /* Reduzido de 0.375rem para 0.2rem */
  }

  @media (max-width: 480px) {
    gap: 0.15rem; /* Reduzido de 0.25rem para 0.15rem */
  }
`;

export const ProductDescriptionTitle = styled.h2`
  font-size: 1.5rem; /* Reduzido de 1.875rem para 1.5rem */
  font-weight: 600;
  color: #f8fafc;
  text-align: center;
  margin: 0 0 0.25rem 0; /* Reduzido de 0.5rem para 0.25rem */
  letter-spacing: -0.025em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.125rem; /* Reduzido de -0.25rem para -0.125rem */
    left: 50%;
    transform: translateX(-50%);
    width: 60px; /* Reduzido de 80px para 60px */
    height: 2px;
    background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem; /* Reduzido de 1.625rem para 1.375rem */
    margin-bottom: 0.21875rem; /* Reduzido de 0.4375rem para 0.21875rem */
    
    &::after {
      width: 50px; /* Reduzido de 60px para 50px */
      bottom: -0.109375rem; /* Reduzido de -0.21875rem para -0.109375rem */
    }
  }

  @media (max-width: 480px) {
    font-size: 1.25rem; /* Reduzido de 1.5rem para 1.25rem */
    margin-bottom: 0.1875rem; /* Reduzido de 0.375rem para 0.1875rem */
    
    &::after {
      width: 40px; /* Reduzido de 50px para 40px */
      bottom: -0.09375rem; /* Reduzido de -0.1875rem para -0.09375rem */
    }
  }
`;

export const ProductDescriptionText = styled.div`
  font-size: 0.875rem; /* Reduzido de 1rem para 0.875rem */
  line-height: 1.2; /* Reduzido de 1.3 para 1.2 */
  text-align: justify;
  color: #cbd5e1;
  margin: 0;
  max-width: 900px; /* Largura máxima para o texto dentro do container */
  
  p {
    margin-bottom: 0.2rem; /* Reduzido de 0.4rem para 0.2rem */
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Estilo para links na descrição */
  a {
    color: #34d399;
    text-decoration: none;
    border-bottom: 1px solid rgba(52, 211, 153, 0.3);
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      color: #6ee7b7;
      border-bottom-color: rgba(110, 231, 183, 0.6);
      text-shadow: 0 1px 2px rgba(52, 211, 153, 0.3);
    }
  }

  /* Estilo para texto em negrito */
  strong, b {
    color: #e2e8f0;
    font-weight: 600;
  }

  /* Estilo para listas */
  ul, ol {
    padding-left: 1rem; /* Reduzido de 1.25rem para 1rem */
    margin: 0.2rem 0; /* Reduzido de 0.4rem para 0.2rem */
    
    li {
      margin-bottom: 0.1rem; /* Reduzido de 0.2rem para 0.1rem */
      color: #cbd5e1;
      
      &::marker {
        color: #10b981;
      }
    }
  }

  /* Estilo para código inline */
  code {
    background: rgba(30, 41, 59, 0.6);
    color: #34d399;
    padding: 0.15rem 0.3rem; /* Reduzido de 0.2rem 0.4rem para 0.15rem 0.3rem */
    border-radius: 4px;
    font-size: 0.75rem; /* Reduzido de 0.8rem para 0.75rem */
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }

  /* Estilo para tabelas */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.2rem 0; /* Reduzido de 0.4rem para 0.2rem */
    background: rgba(30, 41, 59, 0.3);
    border-radius: 8px;
    overflow: hidden;
    
    th, td {
      padding: 0.25rem 0.5rem; /* Reduzido de 0.375rem 0.625rem para 0.25rem 0.5rem */
      text-align: left;
      border-bottom: 1px solid rgba(52, 211, 153, 0.1);
    }
    
    th {
      background: rgba(16, 185, 129, 0.1);
      color: #34d399;
      font-weight: 600;
      font-size: 0.75rem; /* Reduzido de 0.8rem para 0.75rem */
    }
    
    td {
      font-size: 0.75rem; /* Reduzido de 0.8rem para 0.75rem */
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduzido de 0.95rem para 0.8rem */
    line-height: 1.15; /* Reduzido de 1.25 para 1.15 */
    text-align: left;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Reduzido de 0.9rem para 0.75rem */
    line-height: 1.1; /* Reduzido de 1.2 para 1.1 */
  }
`;
