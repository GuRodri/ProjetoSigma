import styled from 'styled-components';

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
  transition: all 0.3s ease;
  padding-bottom: 1em;

  @media (max-width: 768px) {
    .footer-coluna {
      display: none; /* Oculta todas as colunas */
    }
    .footer-coluna:nth-child(3), /* Atendimento */
    .footer-coluna:nth-child(4) { /* Redes Sociais */
      display: flex; /* Exibe apenas Atendimento e Redes Sociais */
    }
  }
`;

export const FooterContainerColunas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  text-decoration: none;
  align-self: first baseline;
  width: 80%;
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

    @media (max-width: 768px) {
   p{
    text-align: center;
    font-size: 6px;
   }
  }
`;

export const SmallTitle1 = styled.p`
  color: #d9d9d9;
  font-size: .75em;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: .5em;
  align-items: center;
`;
