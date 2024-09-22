import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 80%;
  background-color: rgba(84, 84, 84, 0.3);
  padding-top: .25em;

  // Responsividade para telas menores
  @media (max-width: 768px) {
    width: 80%;
     }

  @media (max-width: 480px) {
    width: 100%; // Largura total em celulares menores
    padding-top: 0.5em;
  }
`;

export const StyledSliderSlide = styled.div`
  text-align: center;
`;

export const StyledSliderImage = styled.img`
  width: 100%;
  max-height: 18em;

  // Responsividade para telas menores
  @media (max-width: 768px) {
    max-height: 16em;
  }

  @media (max-width: 480px) {
    max-height: 14em; // Reduz a altura da imagem para celulares menores
  }
`;

