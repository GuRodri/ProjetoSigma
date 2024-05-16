import React, { useState } from 'react';
import { FooterContainer, FooterContainerEndereço, FooterContainerInferior, FooterContainerMenu, FooterContainerCentral, FooterContainerColunas, FooterButton } from './style';
import { SubTitle, SmallTitle } from '../../containers/Home/style';

const Footer = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <FooterContainer>
      <FooterButton onClick={handleToggleMoreInfo}><a>Mais Informações</a></FooterButton>
      <FooterContainerCentral style={{ display: showMoreInfo ? 'flex' : 'none' }}>
        <FooterContainerColunas>
          <SubTitle>Institucional</SubTitle> 
          <SmallTitle>Sigma Hardware+logo</SmallTitle>
          <SmallTitle>Nos conheça melhor</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Produtos</SubTitle> 
          <SmallTitle>Setups Gamer Prontos</SmallTitle>
          <SmallTitle>Monte o seu Setup Fácil</SmallTitle>
          <SmallTitle>Demais Produtos</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Atendimento</SubTitle> 
          <SmallTitle>Email</SmallTitle>
          <SmallTitle>Telefone</SmallTitle>
          <SmallTitle>Whatsapp</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Redes Sociais</SubTitle> 
          <SmallTitle>youtube</SmallTitle>
          <SmallTitle>instagram</SmallTitle>
          <SmallTitle>facebook</SmallTitle>
          <SmallTitle>x</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Minha Conta</SubTitle> 
          <SmallTitle>Entre agora</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Baixe Apps</SubTitle> 
          <SmallTitle>Play Store</SmallTitle>
        </FooterContainerColunas>

        <FooterContainerColunas>
          <SubTitle>Ajuda</SubTitle> 
          <SmallTitle>Ajuda + icone</SmallTitle>
        </FooterContainerColunas>
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