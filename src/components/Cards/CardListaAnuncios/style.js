import styled from "styled-components";

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;   
    justify-content: space-between; 
    width: 100%;
    border: 1px solid #545454;
    background-color: #101419;
    border-radius: 10px;
    padding: 0 1em;
    margin-bottom: 1em;
    
    .BExcluir {
        background-color: #FF0000;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5em 1em;
        cursor: pointer;
        font-size: .675em;

        &:hover {
            background-color: #8b0000;
        }

        &:active {
            transform: scale(1.1);
  }
    }
    .BDetalhes {
        background-color: #25D62C;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5em 1em;
        cursor: pointer;
        font-size: .675em;

        &:hover {
            background-color: #556B2F;
        }

        &:active {
            transform: scale(1.1);
        }
    }
    `;

export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    gap:0.6em;
    border-right: 1px solid #726F6F;
    padding: 1em 1em 0em 1em;
    
`;

export const ContainerBotao = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 1em;
padding-left: 1em;
`;
export const ContainerEspacamento = styled.div`
display: flex;
flex-direction: row;
width: 85%;
justify-content: space-between;
`;