import styled from "styled-components";

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    justify-content:center; 
    `;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self:center;
    color: #d9d9d9; 
    background-color: #252c37;
    width: 100%;
    height: 3em;
    text-align: center;
    border-radius: 10px;
    padding: 0.625em 1.25em;
    margin-top:.5em;
    border: 1px solid #726F6F;
    text-align: left;
    
    img {
        max-width: 5%;
        border-radius: 5px;
        margin-right: 1em;
    }
    
    h3{
        font-size: .3em;
        margin-top: 1em;  
    }

      /* Media query para dispositivos menores */
    @media (max-width: 768px) {
        max-width: 100%; 
    }
    `;

    export const Select1 = styled.select`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    margin: 2em;
    `;

    export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;
    align-items: center;
    `;
    export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    `;