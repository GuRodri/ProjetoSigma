import React from 'react';
import {
  FooterContainer,
  FooterContainerEndereço,
  FooterContainerInferior,
  FooterContainerMenu,
  FooterContainerCentral,
  FooterContainerColunas,
  SmallTitle1,
} from './style';
import Logo from '../../assets/icons/logo.svg'
import { SubTitle, SmallTitle } from '../../containers/Home/style';
// Importando ícones do react-icons
import { AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { FaWhatsapp, FaGooglePlay, FaUser, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerCentral>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Institucional</SubTitle>
          <SmallTitle1>
            Sigma Hardware
            <img src={Logo} style={{ width: "2em" }} alt="Icone de Logo sigma hardware" />
          </SmallTitle1>
          <SmallTitle>Nos conheça melhor</SmallTitle>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Produtos</SubTitle>
          <SmallTitle>Setups Gamer Prontos</SmallTitle>
          <SmallTitle>Monte o seu Setup Fácil</SmallTitle>
          <SmallTitle>Demais Produtos</SmallTitle>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Atendimento</SubTitle>
          <SmallTitle1>
            <AiOutlineMail /> Email
          </SmallTitle1>
          <SmallTitle1>
            <AiOutlinePhone /> Telefone
          </SmallTitle1>
          <SmallTitle1>
            <FaWhatsapp /> Whatsapp
          </SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Redes Sociais</SubTitle>
          <SmallTitle1>
            <AiOutlineYoutube /> YouTube
          </SmallTitle1>
          <SmallTitle1>
            <AiOutlineInstagram /> Instagram
          </SmallTitle1>
          <SmallTitle1>
            <AiOutlineFacebook /> Facebook
          </SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Minha Conta</SubTitle>
          <SmallTitle1>
            <FaUser /> Entre agora
          </SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Baixe Apps</SubTitle>
          <SmallTitle1>
            <FaGooglePlay /> Play Store
          </SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Ajuda</SubTitle>
          <SmallTitle1>
            <FaQuestionCircle /> Ajuda
          </SmallTitle1>
        </FooterContainerColunas>
      </FooterContainerCentral>
      <FooterContainerInferior>
        <FooterContainerMenu>
          <SubTitle>Contato</SubTitle>
          <SubTitle>Acessibilidade</SubTitle>
          <SubTitle>Termos e Condições</SubTitle>
        </FooterContainerMenu>
        <FooterContainerEndereço>
          <p>
            Copyright © 1999-2024 Sigma Hardware. Todos os direitos reservados.
            CNPJ n.º 12.345.678/0001-90 / Rua das Flores, nº 123, Centro, São Paulo/SP - CEP 12345-678
          </p>
        </FooterContainerEndereço>
      </FooterContainerInferior>
    </FooterContainer>
  );
};

export default Footer;
