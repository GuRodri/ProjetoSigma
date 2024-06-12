import styled from "styled-components"

export const ContainerHome = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
    min-height: 77.8vh;
    justify-content: center;
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