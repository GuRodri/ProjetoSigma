import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 80%;
  background-color: rgba(84, 84, 84, 0.3);
  padding: 1em; /* Espaçamento interno ao redor do carrossel */

  // Responsividade para telas menores
  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura para dispositivos menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* Largura total em celulares menores */
    padding: 0.5em;
  }
`;

export const StyledSliderSlide = styled.div`
  display: flex; /* Utiliza flexbox para alinhamento */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  text-align: center;
  padding: 1em; /* Espaçamento entre os slides */
`;

export const StyledSliderImage = styled.img`
  width: 80%; /* Define a largura das imagens */
  max-height: 14em; /* Limita a altura máxima */
  object-fit: cover; /* Garante que a imagem preencha sem distorcer */
  object-position: center; /* Centraliza o conteúdo visível da imagem */

  // Responsividade para telas menores
  @media (max-width: 768px) {
    max-height: 12em; /* Altura ajustada para tablets */
  }

  @media (max-width: 480px) {
    max-height: 10em; /* Altura ajustada para celulares */
  }
`;
