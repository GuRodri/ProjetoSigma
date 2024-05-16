import styled from "styled-components";

export const CardHome = styled.div`
  display: flex;
  flex-direction: column;
  color: #d9d9d9;
  background-color: #252c37;
  max-width: 12.5em;
  max-height: 32.5em;
  text-align: center;
  border-radius: 10px;
  padding: 0.625em 1.25em;
  margin:1em;

  p {
    font-size: 1em; /* Tamanho de fonte relativo */
    color: #d9d9d9;
    margin: 1em 0;
  }
  img {
    max-width: 100%; /* Imagem responsiva */
    height: auto;
    border-radius: 5px;
    margin: 1em 0;
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  span{
    color: #F8B84E;
  }

  /* Media query para dispositivos menores */
  @media (max-width: 768px) {
    max-width: 100%; /* Tornando o card 100% responsivo */
  }
`;