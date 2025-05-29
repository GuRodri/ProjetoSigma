import React from "react";
import {
  ContainerSetup,
  ContainerTexto,
  ContainerButton,
  ContainerImagem,
  ContainerSuperior
} from "./style";
import BCliqueAqui from "../Button/CliqueAqui";
import ImagemSetupGamer2 from "../../assets/imagemSetupGamer2.svg";
import { NavLink } from "react-router-dom";

function AnuncioSetupGamer() {
  return (
    <ContainerSetup>
      <NavLink to="/setupGamer-page1" style={{ textDecoration: 'none' }}>
        <ContainerSuperior>
          <ContainerTexto>
            <h1>Monte seu PC gamer agora mesmo</h1>
          </ContainerTexto>
          <ContainerButton>
            <BCliqueAqui to="/setupGamer-page1" />
          </ContainerButton>
        </ContainerSuperior>
        <ContainerImagem>
          <img src={ImagemSetupGamer2} alt="Imagem do setup gamer" />
        </ContainerImagem>
      </NavLink>
    </ContainerSetup>
  );
}

export default AnuncioSetupGamer;
