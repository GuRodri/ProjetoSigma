import styled from "styled-components"

export const ContainerHome = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
    min-height: 77.8vh;
    justify-content: center;
    padding: 3em;
`;

export const ContainerListagem = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    background-color: #141414;
    border: 1px solid #726F6F;
    padding: 2em;
`;

export const MensagemNenhumProduto= styled.h1 `
    color: white;
    font-size: 1.5em;
`;

export const ContainerOrdenacao = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    margin-bottom: 1em;
    color: #d9d9d9;
    font-size:12px;
`;

export const Select = styled.select `
        color: black;
        margin-right: 1em;
        border-radius: 5px;
        margin-left: 1em;
        background-color: #d9d9d9;
        font-size: 12px;

    option{
        background-color: #d9d9d9;
        border-radius: 0px;
    }
`;