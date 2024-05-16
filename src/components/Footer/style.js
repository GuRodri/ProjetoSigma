import styled from 'styled-components';

export const FooterButton = styled.button`
  background-color:transparent;
  border: none;
  padding: .2em;
  display: flex;
  justify-content: center;
   a {	
    font-size: .75em;
    text-decoration: none;
    color: #d9d9d9;
    background-color:#101419;
    padding: 0.5em 1em;
    border-radius: 1em 1em 0em 0em;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #d9d9d9;
  font-family: 'Roboto', sans-serif;
  min-height: auto;
`;

export const FooterContainerCentral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #252c37;
  border-top: .12em solid #101419;

`;
export const FooterContainerColunas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  text-decoration: none;
  align-self: first baseline;
  margin-top: 1.25em;
  font-size: 0.75em;
`;

export const FooterContainerInferior = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #101419;
  padding: 1em 0;
`;

export const FooterContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: .875em;
  width: 70%;
`;

export const FooterContainerEndereço = styled.div`
  font-size: .68em;
  color: #d9d9d9;
  font-family: 'Roboto', sans-serif;
  margin-top: 1.25em;
  padding: 0 3em;
`;