import styled from "styled-components";

export const ContainerSetupsMaisVendidos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(35, 58, 74, 0.7);
  border-radius: 15px;
  width: 80%;
  margin: 2em auto;
  padding: 2em;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 1em auto;
    padding: 1em;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5em;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
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
  padding: 0 3em;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 2em;
  }

  @media (max-width: 480px) {
    padding: 0 1.5em;
  }
`;

export const StyledSliderSlide = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
