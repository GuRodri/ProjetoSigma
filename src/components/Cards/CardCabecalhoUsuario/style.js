import styled from 'styled-components';

export const CardHome2 = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #545454;
  border-radius: 2px;
  margin: 1em 0;
  width: 100%;
  //background-color: #101419;
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTexto = styled.div`
  flex: 1;
  text-align: left;

  p {
    margin: 0;
  }
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .BExcluir {
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  .BDetalhes {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    cursor: pointer;
  }
`;

export const ContainerTexto1 = styled.div`
  flex: 1;
  text-align: left;
  font-weight: bold;
  min-width: 13.5em;
  margin-top: 1em;
`;

export const ContainerTexto5 = styled.div`
  flex: 1;
  text-align: left;
  font-weight: bold;
  min-width: 14.5em;
  margin-top: 1em;
  
`
