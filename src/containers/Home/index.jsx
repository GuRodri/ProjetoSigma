import React from 'react';
import { ContainerHome } from "./style";
import AnuncioSetupGamer from "../../components/AnuncioSetupGamer";
import CAnuncio from "../../components/Carrosseis/Anuncio";
import CSetupsMaisVendidos from "../../components/Carrosseis/SetupsMaisVendidos";
import CDestaques from "../../components/Carrosseis/SetupsDestaques";

const Home = () => {
  return (
    <ContainerHome>
      <CAnuncio />
      <AnuncioSetupGamer />
      <CSetupsMaisVendidos />
      <CDestaques />
    </ContainerHome>
  );
}

export default Home;
