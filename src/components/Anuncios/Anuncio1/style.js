import styled from 'styled-components'; 

export const ContainerAnuncios = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: gray;
`;

export const TituloAnuncios = styled.p `
    color: #d9d9d9;
    font-size: 1.25em;
    
`;

export const TextoAnuncios = styled.p `
    color: #d9d9d9;
    font-size: .875em;
    margin:0;
    padding:0;
    
`;  
export const ImagemAnuncios = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;