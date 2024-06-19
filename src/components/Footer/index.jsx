import React from 'react';
import {
  FooterContainer,
  FooterContainerEndereço,
  FooterContainerInferior,
  FooterContainerMenu,
  FooterContainerCentral,
  FooterContainerColunas,
  SmallTitle1
} from './style';
import { SubTitle, SmallTitle } from '../../containers/Home/style';
import IconeYoutube from '../../assets/icons/Footer/IconeYoutube.svg';
import IconeInstagram from '../../assets/icons/Footer/IconeInstagram.svg';
import IconeFacebook from '../../assets/icons/Footer/IconeFacebook.svg';
import IconeWhatsapp from '../../assets/icons/Footer/IconeWhatsapp.svg';
import IconeAjuda from '../../assets/icons/Footer/IconeAjuda.svg';
import IconePlayStore from '../../assets/icons/Footer/IconePlayStore.svg';
import IconeEmail from '../../assets/icons/Footer/IconeEmail.svg';
import IconeX from '../../assets/icons/Footer/IconeX.svg';
import Logar from '../../assets/icons/logar.svg';
import Logo from '../../assets/icons/logo.svg';
import IconeTelefone from '../../assets/icons/Footer/IconeTelefone.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerCentral>
        <FooterContainerColunas>
          <SubTitle>Institucional</SubTitle>
          <SmallTitle1>Sigma Hardware <img src={Logo} style={{ width: "3em" }} alt="Icone de Logo sigma hardware"/></SmallTitle1>
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
          <SmallTitle1>Email <img src={IconeEmail} style={{ width: "2em" }} alt="Icone do Email"/></SmallTitle1>
          <SmallTitle1>Telefone <img src={IconeTelefone} style={{ width: "2em" }} alt="Icone do Telefone"/></SmallTitle1>
          <SmallTitle1>Whatsapp <img src={IconeWhatsapp} style={{ width: "2em" }} alt="Icone do Whatsapp"/></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas>
          <SubTitle>Redes Sociais</SubTitle>
          <SmallTitle1>youtube <img src={IconeYoutube} style={{ width: "2em" }} alt="Icone do Youtube"/></SmallTitle1>
          <SmallTitle1>instagram <img src={IconeInstagram} style={{ width: "2em" }} alt="Icone do Instagram"/></SmallTitle1>
          <SmallTitle1>facebook <img src={IconeFacebook} style={{ width: "2em" }} alt="Icone do Facebook"/></SmallTitle1>
          <SmallTitle1>x <img src={IconeX} style={{ width: "2em" }} alt="Icone do X"/></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas>
          <SubTitle>Minha Conta</SubTitle>
          <SmallTitle1>Entre agora <img src={Logar} style={{ width: "4em" }} alt="Icone de logar"/></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas>
          <SubTitle>Baixe Apps </SubTitle>
          <SmallTitle1>Play Store <img src={IconePlayStore} style={{ width: "2em" }} alt="Icone da Play Store"/></SmallTitle1>
        </FooterContainerColunas>
        <FooterContainerColunas>
          <SubTitle>Ajuda</SubTitle>
          <SmallTitle1>Ajuda <img src={IconeAjuda} style={{ width: "2em" }} alt="Icone de Ajuda"/></SmallTitle1>
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
