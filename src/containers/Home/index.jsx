import React from 'react';
import { ContainerHome } from "./style";
import AnuncioSetupGamer from "../../components/AnuncioSetupGamer";
import CAnuncio from "../../components/Carrosseis/Anuncio";
import CSetupsMaisVendidos from "../../components/Carrosseis/SetupsMaisVendidos";
import CDestaques from "../../components/Carrosseis/SetupsDestaques";
import fundo1 from '../../assets/Img/fundo/fundo1.svg';

const Home = () => {
  return (
    <ContainerHome style={{ background: `url(${fundo1}) no-repeat center center/cover` }}>
      <CAnuncio />
      <AnuncioSetupGamer />
      <CSetupsMaisVendidos />
      <CDestaques />
    </ContainerHome>
  );
}

export default Home;
