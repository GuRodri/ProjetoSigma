// No seu style.ts (opcional para animações suaves nos ícones)

import styled from 'styled-components';

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
  background-color: #101419;
  border-radius: 0.625em;
  padding: 1em;
  width: 14%;
  text-align: center;
  border: 1px solid #545454;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 20%;
    margin: 1em 1em;
  }

  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 1.5em;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const Description = styled.p`
  color: #d9d9d9;
  text-align: center;
  min-height: 2.5em;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
