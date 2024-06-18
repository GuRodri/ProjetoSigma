import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 3em;
    height: 77.8vh;

    h1{
        text-align: center;
        color: #d9d9d9;
    }
    `;
export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    color: #d9d9d9;
    `;
export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 30%;
    `;
export const Input = styled.input`
    margin-bottom: 8px;
    margin: 5px 0 30px 0;
    border: 1px solid #ccc;
    border-radius: 1.25em;
    height: 35px;
    text-align: left;
    padding: 0 15px;
    `;