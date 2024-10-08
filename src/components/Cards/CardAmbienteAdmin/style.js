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
  background-color: #101419;
  border-radius: 0.625em;
  padding: 1em;
  width: 14%;
  text-align: center;
  border: 0.0625em solid #545454;
  min-height: 10em;

  /* Responsividade */
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

export const Image = styled.img`
  border-radius: 0.25em;
  max-width: 100%;
  height: auto;
`;

export const Description = styled.p`
  color: #d9d9d9;
  text-align: center;
  min-height: 2.5em;
  font-size: 70%;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 80%;
  }

  @media (max-width: 480px) {
    font-size: 90%;
  }
`;
