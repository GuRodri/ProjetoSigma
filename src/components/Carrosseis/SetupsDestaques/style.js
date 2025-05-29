import styled from "styled-components";

export const Destaques = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(35, 58, 74, 0.8);
  width: 80%;
  margin: 1em 2em 0 2em;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2em;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 1em;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: 1em;
    padding: 1.5em;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5em;
  background-color: transparent;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 2em;
    color: #fff;
    font-family: "Arial", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.8em;
    }

    @media (max-width: 480px) {
      font-size: 1.6em;
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
  gap: 2em;
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  padding: 0 3em;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1.5em;
  }

  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;

export const StyledSliderSlide = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardWrapper = styled.div`
  padding: 1.5em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
`;

