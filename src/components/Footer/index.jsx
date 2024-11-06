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
import Logo from '../../assets/icons/logo.svg';
import { SubTitle, SmallTitle } from '../../containers/Home/style';
import { AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { FaWhatsapp, FaGooglePlay, FaUser, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerCentral>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Institucional</SubTitle>
          <SmallTitle1>
            <img src={Logo} style={{ width: "2em" }} alt="Icone de Logo sigma hardware" /> Sigma Hardware
          </SmallTitle1>
          <SmallTitle>Nos conheça melhor</SmallTitle>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Produtos</SubTitle>
          <SmallTitle><a href="#setups-gamer" style={{ textDecoration: "none", color: "inherit" }}>Setups Gamer Prontos</a></SmallTitle>
          <SmallTitle><a href="#monte-setup" style={{ textDecoration: "none", color: "inherit" }}>Monte o seu Setup Fácil</a></SmallTitle>
          <SmallTitle><a href="#demais-produtos" style={{ textDecoration: "none", color: "inherit" }}>Demais Produtos</a></SmallTitle>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Atendimento</SubTitle>
          <SmallTitle1><a href="mailto:contato@sigmahardware.com"><AiOutlineMail /> Email</a></SmallTitle1>
          <SmallTitle1><a href="tel:+5511999999999"><AiOutlinePhone /> Telefone</a></SmallTitle1>
          <SmallTitle1><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Whatsapp</a></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Redes Sociais</SubTitle>
          <SmallTitle1><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /> YouTube</a></SmallTitle1>
          <SmallTitle1><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /> Instagram</a></SmallTitle1>
          <SmallTitle1><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /> Facebook</a></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Minha Conta</SubTitle>
          <SmallTitle1><a href="#login"><FaUser /> Entre agora</a></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Baixe Apps</SubTitle>
          <SmallTitle1><a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"><FaGooglePlay /> Play Store</a></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas className="footer-coluna">
          <SubTitle>Ajuda</SubTitle>
          <SmallTitle1><a href="#ajuda"><FaQuestionCircle /> Ajuda</a></SmallTitle1>
        </FooterContainerColunas>
      </FooterContainerCentral>
      <FooterContainerInferior>
        <FooterContainerMenu>
          <SubTitle><a href="#contato" style={{ textDecoration: "none", color: "inherit" }}>Contato</a></SubTitle>
          <SubTitle><a href="#acessibilidade" style={{ textDecoration: "none", color: "inherit" }}>Acessibilidade</a></SubTitle>
          <SubTitle><a href="#termos-condicoes" style={{ textDecoration: "none", color: "inherit" }}>Termos e Condições</a></SubTitle>
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
