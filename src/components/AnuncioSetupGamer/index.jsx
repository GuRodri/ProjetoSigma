import React from "react";
import { ContainerSetup, ContainerTexto, ContainerButton, ContainerImagem, ContainerSuperior  } from "./style";
import BCliqueAqui from "../Button/CliqueAqui";
import ImagemSetupGamer2 from "../../assets/ImagemSetupGamer2.svg";

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
                <img src={ImagemSetupGamer2} alt="Imagem do setup gamer" />
            </ContainerImagem>
            
        </ContainerSetup>
    );
}

export default AnuncioSetupGamer;