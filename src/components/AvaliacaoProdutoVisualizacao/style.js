import styled from "styled-components";

// Container principal com responsividade para telas menores
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  color: #d9d9d9;
  padding: 2em;
  background-color: #0f0f17;
  width: 80%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 95%; /* Ajusta a largura em telas menores */
    padding: 1.5em;
  }
`;

// Grid de avaliações com adaptação para dispositivos móveis
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
  border-right: 1px solid #363434;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna em dispositivos menores */
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  border-radius: 10px;
  gap: 1em;

  @media (max-width: 480px) {
    flex-direction: column; /* Empilha os itens verticalmente em telas muito pequenas */
    text-align: center;
  }
`;

// Imagem do card com responsividade
export const CardImagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.5em;

  @media (max-width: 480px) {
    width: 100%; /* Imagem se ajusta à largura disponível */
    max-width: 120px;
  }
`;

export const Centralizar = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 1.2em;

  @media (max-width: 480px) {
    font-size: 1em; /* Reduz o tamanho da fonte em telas menores */
    flex-direction: column;
  }
`;

export const AvaliacaoTitulo = styled.h3`
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
`;

export const BotaoMostrarMais = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  padding-left: 2em;

  button {
    background-color: #00d100;
    border: none;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00a000;
    }
  }

  @media (max-width: 480px) {
    padding-left: 0;
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Centralizar2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
