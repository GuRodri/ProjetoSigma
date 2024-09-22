import styled from "styled-components";

export const Destaques = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(35, 58, 74, 0.5);
    width: 80%;
    margin: 1em 2em 0 2em;

    @media (max-width: 768px) {
        width: 80%;
        margin: 1em 1em 0 1em;
    }
    @media (max-width: 480px) {
        width: 100%;
        margin: 1em 1em 0 1em;
    }
`;

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    background-color: transparent;

    h1 {
        font-size: 1.8em;
        width: 100%;
        text-align: center;
        color: #d9d9d9;

        @media (max-width: 768px) {
            font-size: 1.5em;
        }

        @media (max-width: 480px) {
            font-size: 1.2em;
        }
    }
`;

export const ContainerSetups = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledSliderContainer = styled.div`
    width: 100%;
    padding: 0 3em;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0 1.5em;
    }

    @media (max-width: 480px) {
        padding: 0 1em;
    }
`;

export const StyledSliderSlide = styled.div`
    text-align: center;
`;
