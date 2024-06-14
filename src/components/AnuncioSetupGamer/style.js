import styled from "styled-components";

export const ContainerSetup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(84, 84, 84, 0.3);
    width: 80%;
    margin: 1em 5em 0 5em;
    h1{
        color:#d9d9d9;
    }
    `;

export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
    `;
export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    `;
export const ContainerImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    width: 100%;
    height: 12em;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    `;
export const ContainerSuperior = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;