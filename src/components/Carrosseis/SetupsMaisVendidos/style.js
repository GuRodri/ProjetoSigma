import styled from "styled-components";

export const ContainerSetupsMaisVendidos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(35, 58, 74, 0.5);
  width: 80%;
  margin: 1em auto; /* Ajuste de margens */

  /* Para telas menores */
  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0.5em auto;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  background-color: transparent;

  h1 {
    font-size: 1.5em;
    width: 100%;
    text-align: center;
    color: #d9d9d9;

    /* Reduzindo o tamanho da fonte em dispositivos menores */
    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }
`;

export const ContainerSetups = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  padding: 0 2em;
  margin: 0 auto;

  /* Reduzir o padding em telas menores */
  @media (max-width: 768px) {
    padding: 0 1.5em;
  }

  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;

export const StyledSliderSlide = styled.div`
  text-align: center;
`;
