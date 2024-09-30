import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row; /* Coloca o carrossel e as informações lado a lado */
  align-items: stretch; /* Garante que ambos ocupem a mesma altura */
  min-heigth: 400px;
`;

export const ProductInfoContainer = styled.div`
  padding: 20px;
  background-color: #252C37;
  color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinhamento ao topo */
  gap: 15px; /* Espaçamento entre os itens */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
  transition: transform 0.3s; /* Transição suave para hover */
    
  &:hover {
      transform: scale(1.02); /* Efeito de zoom ao passar o mouse */
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem; /* Aumenta o tamanho da fonte do título */
  margin: 0; /* Remove margens padrão */
  color: #d9d9d9; /* Cor do título */
`;

export const ProductDescription = styled.p` /* Alterado para p para mais semântica */
  font-size: 1rem;
  margin: 0; /* Remove margens padrão */
  color: #B0B0B0; /* Cor da descrição mais clara */
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem; /* Mantém o tamanho da fonte do preço */
  margin: 0; /* Remove margens padrão */
`;

export const ProductButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Espaço igual entre os botões */
  margin-top: 10px; /* Margem para separação dos botões */
  width: 100%;
  gap: 10px; /* Espaçamento entre os botões */
  font-size: 14px;
`;
