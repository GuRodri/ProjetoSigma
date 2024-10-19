import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  gap: 1em; /* Adicionado para espaçamento entre linhas */
  
  @media (max-width: 768px) {
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilhar colunas em telas menores */
    align-items: center; /* Centraliza os itens */
    width: 90%; /* Ajusta a largura */
    gap: 1.5em;
  }

  @media (max-width: 480px) {
    width: 95%; /* Ocupa toda a largura da tela */
    gap: 1em; /* Reduz o espaçamento */
  }
`;
