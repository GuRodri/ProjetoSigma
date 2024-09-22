import styled from "styled-components";

export const ContainerSetup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(84, 84, 84, 0.3);
    width: 80%;
    margin: 1em 5em 0 5em;
    padding-bottom: 1em;

    h1 {
        color: #d9d9d9;
    }

    // Responsividade para telas menores
    @media (max-width: 768px) {
        margin: 1em 2em;
        width: 80%;
    }

    @media (max-width: 480px) {
        margin: 1em 0em;
        width: 100%;
    }
`;

export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 22px;
    }

    // Responsividade para telas menores
    @media (max-width: 768px) {
       margin: 0.5em;

       h1{
        font-size: 14px;
       }
    }

    @media (max-width: 560px) {
        margin: 0.2em;
        font-size: 8px;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;

    // Responsividade para telas menores
    @media (max-width: 768px) {
        margin: 0.5em;
    }

    @media (max-width: 480px) {
        margin: 0.2em;
    }
`;

export const ContainerImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12em;

    img {
        width: 90%;
        height: 100%;
        border-radius: 10px;
    }

    // Responsividade para telas menores
    @media (max-width: 768px) {
        height: 10em;
    }

    @media (max-width: 480px) {
        height: 8em;
    }
`;

export const ContainerSuperior = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 1em;
    margin-top: 1em;

    // Responsividade para telas menores
    @media (max-width: 768px) {
        flex-direction: row; // Coloca os itens em coluna em vez de linha
    }

    @media (max-width: 480px) {
        flex-direction: row; // Mantém os itens em coluna em celulares
    }
`;
