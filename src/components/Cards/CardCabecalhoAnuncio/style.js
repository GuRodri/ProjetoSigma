import styled from 'styled-components';

export const CardHome2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1d23;
  border-radius: 12px;
  padding: 1em;
  margin-bottom: 1em;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;

  p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 500;
    color: #E0E0E0;
    word-break: break-word;
  }
`;

export const ContainerBotao = styled.div`
  display: flex;
  gap: 0.8em;

  button, svg {
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0.8;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

export const ImagemAnuncio = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const P1 = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #E0E0E0;
`;

export const P5 = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #E0E0E0;
`;
