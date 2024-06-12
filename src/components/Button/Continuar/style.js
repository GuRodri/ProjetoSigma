import styled from "styled-components"
export const MyButton = styled.button`
  display: flex;
  justify-content: center;
  color: #050505;
  background-color: #25d62c;
  min-width: 120px;
  text-align: center;
  height: 2em;
  border-radius: 10px;
  border: none;
  font-size: 1.125em;
  align-items: center;

  &:active {
    transform: scale(0.95); /* Reduz o tamanho do botão quando clicado */
  }

  /* Você pode adicionar mais estilos para o estado :active conforme necessário */
`;