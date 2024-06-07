import React, { useState, useEffect } from 'react';
import { ContainerHome, ContainerListagem} from "./style";
import AnuncioSetupGamer from "../../components/AnuncioSetupGamer";
import CAnuncio from "../../components/Carrosseis/Anuncio";
import CSetupsMaisVendidos from "../../components/Carrosseis/SetupsMaisVendidos";
import CDestaques from "../../components/Carrosseis/SetupsDestaques";

function Home() {
  return (
    <ContainerHome>
         <CAnuncio />
         <ContainerListagem>
        </ContainerListagem>  
         <AnuncioSetupGamer />
         <CSetupsMaisVendidos />
         <CDestaques />
    </ContainerHome>
  );
}

export default Home;
