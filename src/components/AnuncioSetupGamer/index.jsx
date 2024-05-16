import React from "react";
import { ContainerSetup, ContainerTexto, ContainerButton, ContainerImagem, ContainerSuperior  } from "./style";
import BCliqueAqui from "../Button/CliqueAqui";
import ImagemSetupGamer from "../../assets/ImagemSetupGamer.png";

function AnuncioSetupGamer() {
    return (
        <ContainerSetup>
            <ContainerSuperior>
                <ContainerTexto>
                    <h1>Monte seu PC gamer agora mesmo</h1>
                </ContainerTexto>
                <ContainerButton>
                    <BCliqueAqui/>
                </ContainerButton>  
            </ContainerSuperior>
            <ContainerImagem>
                <img src={ImagemSetupGamer} alt="Imagem do setup gamer" />
            </ContainerImagem>
            
        </ContainerSetup>
    );
}

export default AnuncioSetupGamer;