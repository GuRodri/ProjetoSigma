import styled from "styled-components";

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self:center;
    color: #d9d9d9; 
    background-color: #252c37;
    width: 100%;
    max-height: 8em;
    text-align: center;
    border-radius: 10px;
    padding: 0.625em 1.25em;
    margin-top:.5em;
    
    img {
        max-width: 14%;
        border-radius: 5px;
        
    }
    
    .button {
        display: flex;
        justify-content: center;
        align-self:center;
        max-height:2em;
    }

    h3{
        font-size: .675em;
        margin-top: 1em;
        
    }


    /* Media query para dispositivos menores */
    @media (max-width: 768px) {
        max-width: 100%; /* Tornando o card 100% responsivo */
    }
    `;

    export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    justify-content: center;
    align-items: start;
    `;

    export const ContainerRating = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 1em;
    `;