// Estilos do CDestaques
import styled from "styled-components";

export const ContainerSetupsMaisVendidos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(35, 58, 74, 0.5);
    width: 80%;
    margin: 1em 5em;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    background-color: transparent;
    
    h1 {
        font-size: 1.5em;
        width: 100%;
        text-align: center;
    }
`;

export const ContainerSetups = styled.div`
    display: flex;
    flex-direction: column; /* Alterado para column */
    align-items: center;
    width: 100%;
`;

export const StyledSliderContainer = styled.div`
    width: 100%;
    padding: 0 2em; /* Reduzido o padding para garantir espaço suficiente */
    margin: 0 auto;
`;

export const StyledSliderSlide = styled.div`
    text-align: center;
`;