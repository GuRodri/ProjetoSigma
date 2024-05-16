import React from "react";
import { ContainerAnuncios, TituloAnuncios, TextoAnuncios, ImagemAnuncios } from "./style";

function Anuncio1() {
    return (
        <ContainerAnuncios>
                <TituloAnuncios>Titulo da Noticia</TituloAnuncios>
                <TextoAnuncios>Texto da noticia</TextoAnuncios>
                <ImagemAnuncios>
                    <img src="https://via.placeholder.com/150" alt="Imagem da noticia" />
                </ImagemAnuncios>
        </ContainerAnuncios>
    );
}

export default Anuncio1;