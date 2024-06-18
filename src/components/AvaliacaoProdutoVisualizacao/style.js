import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    color: #d9d9d9;
    gap:1em;   
    `;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    `;
export const Li= styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
    background-color: #252C37;
    margin-bottom: 1em;
    border-radius: 10px;
    border: 1px solid #726F6F;
    align-items: center;
    `;

export const Centralizar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2em;
    `;