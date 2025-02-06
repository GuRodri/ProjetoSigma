import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3em;
    height: 77.8vh;
`;

export const Coluna = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
    padding: 1em;
    color: #d9d9d9;
    gap: 1em;
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    color: #d9d9d9;
    gap: 1em;
`;

export const Campo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 8em;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    cursor: pointer;
    border-color: ${(props) => (props.selected ? "blue" : "#d9d9d9")};
    background-color: ${(props) => (props.selected ? "rgba(0, 0, 255, 0.1)" : "transparent")};
    &:hover {
        border-color: blue;
    }
`;
