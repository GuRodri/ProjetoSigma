import styled from 'styled-components';

// Container das informações do produto
export const ProductInfoContainer = styled.div`
  padding: 30px;
  background-color: #1f1f2e;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`;

// Título do produto com estilo elegante
export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Descrição do produto
export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #b8b8b8;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Preço destacado
export const ProductPrice = styled.p`
  font-size: 1.3rem;
  margin: 0;
  color: #00bfa6;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

// Informação do estoque
export const StockInfo = styled.p`
  font-size: 1rem;
  color: ${(props) => (props.quantidadeEstoque > 0 ? '#ffffff' : '#ff6961')};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Container dos botões
export const ProductButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00bfa6;
      color: #fff;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 6px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;
