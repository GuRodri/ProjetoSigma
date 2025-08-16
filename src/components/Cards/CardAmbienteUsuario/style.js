import styled from 'styled-components';

const baseFontSize = 16;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  text-align: center;
  color: #d9d9d9;
  width: 70%;
  margin-top: 1.875em;

  /* Responsividade */
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  background: linear-gradient(145deg, #1a1f24, #0e1115);
  border-radius: 1rem;
  padding: 1.5em 1em;
  width: 20%;
  text-align: center;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1024px) {
    width: 22%;
    margin: 1em;
  }

  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 1.5em;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  margin: 0 auto;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.1));
`;

export const Description = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.75em;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
