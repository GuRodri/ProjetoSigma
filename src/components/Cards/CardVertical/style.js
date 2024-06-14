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
  margin:1em;
  border: 1px solid #726F6F;

  p {
    font-size: 1em;
    color: #d9d9d9;
    margin: 1em 0;
  }
  img {
    width:8em;
    height:8em;
    border-radius: 5px;
    margin: 1em 0;
  }
  .Ajusteimagem{
    display: flex;
    justify-content: center;
    background: white;
    margin-bottom: .8em;
    border-radius: 10px;
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

export const NomeProd = styled.span`
    font-size: 16px; /* tamanho da fonte */
    font-weight: bold; /* negrito */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* limite de 2 linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 40px; /* altura do contêiner do título */

    h2{
      color: #d9d9d9;
      font-size: .875em;
      margin: 0;
      padding: 0;
      width: 176px;
    }
`;