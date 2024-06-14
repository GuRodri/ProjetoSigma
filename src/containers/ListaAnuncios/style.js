import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
    min-height: 77.8vh;
    justify-content: flex-start;
    color: #d9d9d9;
    padding: 3em;
    p{
        margin-bottom: 1em;
    }
`;

export const ContainerCarrinho = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin-bottom: 2em;
    gap: 1em;

    .adicionar{
        position: relative;
  display: inline-block;
  color: #d9d9d9;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px; /* Ajuste conforme necessário */
    left: 0;
    width: 100%;
    height: .5px; /* Altura mínima para uma linha quase invisível */
    background: rgba(255, 255, 0, 0.3); /* Amarelo quase invisível */
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 255, 0, 0.2), 0 0 20px rgba(255, 255, 0, 0.1);
  
  }
    }
`;
export const ContainerCarrinho2 = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    border: 1px solid #726F6F;
    background-color: #252c37;
    border-radius: 10px;
`;

export const ContainerMenor = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
    margin: 1em;
    align-self:flex-end;
`;  

export const ContainerBotao= styled.div `
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    align-items: center;
    margin-top: 1em;
    align-self:flex-end;
`;