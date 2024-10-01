import styled from "styled-components";

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    min-height: 77.5vh;
    align-items: center;
    background-color: transparent;
    text-align: center;
    color: #d9d9d9;
    padding: 3em;
    
    h1 {
        margin-top: 1.875em;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 2em;
    }

    @media (max-width: 480px) {
        padding: 1.5em;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 2em;

    /* Responsividade */
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 480px) {
        margin: 1em;
    }
`;
