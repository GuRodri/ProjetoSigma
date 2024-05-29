// Footer.js
import React, { useState } from 'react';
import {
  FooterContainer,
  FooterContainerEndereço,
  FooterContainerInferior,
  FooterContainerMenu,
  FooterContainerCentral,
  FooterContainerColunas,
  FooterButton
} from './style';
import { SubTitle, SmallTitle } from '../../containers/Home/style';

const Footer = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo(prevState => !prevState);
    if (!showMoreInfo) {
      // Rola a página até o final para exibir todo o conteúdo do footer
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterButton onClick={handleToggleMoreInfo}>Mais Informações</FooterButton>
      <FooterContainerCentral $show={showMoreInfo}>
        <FooterContainerColunas>
          <SubTitle>Institucional</SubTitle> 
          <SmallTitle>Sigma Hardware+logo</SmallTitle>
          <SmallTitle>Nos conheça melhor</SmallTitle>
        </FooterContainerColunas>

        {/* Outras colunas omitidas para brevidade */}
        
      </FooterContainerCentral>
      
      <FooterContainerInferior>
        <FooterContainerMenu>
          <SubTitle>Contato</SubTitle> 
          <SubTitle>Acessibilidade</SubTitle>
          <SubTitle>Termos e Condições</SubTitle> 
        </FooterContainerMenu>
        <FooterContainerEndereço>
          <p>Copyright © 1999-2024 Sigma Hardware. Todos os direitos reservados.
          CNPJ n.º 12.345.678/0001-90 / Rua das Flores, nº 123, Centro, São Paulo/SP - CEP 12345-678
          </p>  
        </FooterContainerEndereço>
      </FooterContainerInferior>
    </FooterContainer>
  );
};

export default Footer;
