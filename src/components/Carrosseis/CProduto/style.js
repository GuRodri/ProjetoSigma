import styled from 'styled-components';

// Container externo do carrossel
export const CarouselContainer = styled.div`
  max-width: 50%; /* Define que o carrossel ocupa metade da tela */
  margin: 0 auto; /* Centraliza na tela */
  background-color: #1f1f2e;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra elegante */
  overflow: hidden; /* Garante que não haja overflow das imagens */
`;

// Container de cada slide do carrossel
export const ContainerEspacamento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #252C37;
`;

// Estilização das imagens no carrossel
export const ImagemCarrossel = styled.img`
  width: 80%;
  max-height: 400px;
  border-radius: 15px;
  object-fit: cover; /* Mantém proporção correta */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* Leve zoom ao passar o mouse */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Sombra mais intensa no hover */
  }
`;
