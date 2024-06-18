import styled from "styled-components";

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;   
    justify-content: space-between; 
    width:100%;
    `;

export const BAdicionar1 = styled.button`
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
`;

export const BRemover = styled.button`
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
`;

export const ContainerTexto = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    gap:0.6em;
    justify-content: center;
    padding: .25em;
`;

export const ContainerBotao = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
gap: 1em;
padding-left: 1em;

`;
export const ContainerEspacamento = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;