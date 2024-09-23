import styled from "styled-components";

export const CardHome2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #d9d9d9;
  background-color: #252c37;
  max-width: 12.5em;
  max-height: 32.5em;
  text-align: center;
  border-radius: 10px;
  padding: 0.625em .675em;
  margin: 1em;
  border: 1px solid #726F6F;

  p {
    font-size: 1em;
    color: #d9d9d9;
    margin: 1em 0;
  }

  img {
    width: 100%;
    height: 8em;
    border-radius: 5px;
    margin: 1em 0;

     @media (max-width: 900px) {
      width: 100%;
      height: 6.5em;
    }

    @media (max-width: 600px) {
      width: 100%;
    height: 5.8em;
    }
  }

  .Ajusteimagem {
    display: flex;
    justify-content: center;
    background: white;
    margin-bottom: 0.8em;
    border-radius: 10px;
  }

  span {
    color: #F8B84E;
  }

  /* Media query para tablets */
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: none; /* Remove a altura máxima em telas menores */
    min-width: 8em;
    margin: 1em .5em;
  }

  /* Media query para celulares */
  @media (max-width: 480px) {
    padding: 0.5em; /* Reduzir o padding */
    img {
      width: 6em; /* Diminuir o tamanho da imagem em telas pequenas */
      height: 6em;
    }
    max-width: 90%;
  }
`;

export const NomeProd = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;

  h2 {
    color: #d9d9d9;
    font-size: 0.875em;
    margin: 0;
    padding: 0;
    width: 176px;
  }

  /* Media query para celulares */
  @media (max-width: 480px) {
    font-size: 14px; /* Reduzir o tamanho da fonte em celulares */
    h2 {
      font-size: 0.8em; /* Ajustar o tamanho do título */
      width: 100%; /* Ajustar a largura do título para ocupar mais espaço */
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  color: #050505;
  background-color: #25D62C;
  width: 100%;
  text-align: center;
  height: 2.6875em;
  border-radius: 10px;
  border: none;
  padding: 0.625em 1.25em;
  cursor: pointer;
  font-size: 0.875em;
  font-weight: bold;
  margin-top: 0.8em;
  margin-bottom: 0.8em;

  &:hover {
    background-color: #556b2f;
  }

  &:active {
    transform: scale(1.1);
  }

  /* Media query para celulares */
  @media (max-width: 480px) {
    font-size: 0.75em; /* Reduzir o tamanho do texto do botão em celulares */
    padding: 0.5em 1em; /* Ajustar o padding para telas menores */
  }
`;
