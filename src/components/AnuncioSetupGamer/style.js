import styled from "styled-components";

export const ContainerSetup = styled.div`
  width: 80%;
  margin: 2em auto;
  padding: 2em;
  background-color: rgba(35, 58, 74, 0.7);
  border-radius: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  h1 {
    color: #ffffff;
    font-size: 1.75rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  @media (max-width: 768px) {
    padding: 1.5em;
    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1em;
    h1 {
      font-size: 1rem;
    }
  }
`;

export const ContainerSuperior = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5em;
  }
`;

export const ContainerTexto = styled.div`
  flex: 1;
  text-align: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerImagem = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 16em;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    img {
      max-height: 12em;
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 10em;
    }
  }
`;
