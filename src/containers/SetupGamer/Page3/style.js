import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ContainerEspacamento3 = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1em;
    width:80%;
    color: #d9d9d9;
    padding-top: 3em;
    gap: 2em;
    p{
        margin-bottom: 1em;
    }
`;


export const ContainerCarrinho = styled.div `
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    align-items: end;
    padding: 1em;
    border: 1px solid #d9d1e9;
    background-color: #141516;
    border-radius: 10px;
`;

export const ListagemJogos = styled.ul `
  height: 15em; /* Defina a altura fixa desejada */
  overflow-y: scroll;
  width: 15em;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #151515; 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #999; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666; 
  }

  /* Firefox Scrollbar Styles */
  scrollbar-width: thin;
  scrollbar-color: #999 #151515;

  /* Scrollbar Styles for IE, Edge, and other browsers */
  &::-ms-scrollbar {
    width: 10px;
  }

  &::-ms-scrollbar-track {
    background: #151515; 
    border-radius: 10px;
  }

  &::-ms-scrollbar-thumb {
    background: #999; 
    border-radius: 10px;
  }

  &::-ms-scrollbar-thumb:hover {
    background: #666; 
  }
`;


export const ContainerCarrinho2 = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #252c37;
    border-radius: 10px;
`;

export const ContainerMenor = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
    margin: 1em;
    align-self:flex-end;
`;  
export const ContainerBotao= styled.div `
    display: flex;
    justify-content: center;
    margin: 2em;
`;


export const ContainerTitulo = styled.div `
    display: flex;
    text-align: center;
    width: 100%;
    gap:0.6em;
    justify-content: center;
    padding: .25em;
`;