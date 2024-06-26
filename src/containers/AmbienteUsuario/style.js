import styled from "styled-components";

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    min-height: 77.5vh;
    align-items: center;
    align-self: self-end;
    background-color: transparent;
    text-align: center;
    color: #d9d9d9;
    text-decoration: none;
    padding: 3em;
    h1 {
        margin-top: 1.875em;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin:2em;
`;