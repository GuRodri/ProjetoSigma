import React from "react";
import { ContainerSetupsMaisVendidos, ContainerTitulo, ContainerSetups, StyledSliderContainer, StyledSliderSlide } from "./style";
import CardVertical from "../../Cards/CardVertical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CSetupsMaisVendidos() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 4, // Altere conforme necessário
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Tempo de exibição de cada anúncio (5 segundos)
        pauseOnHover: true // Pausa quando o mouse estiver sobre o carrossel
      };

    return (
        <ContainerSetupsMaisVendidos>
            <ContainerTitulo>
                <h1>Setups mais vendidos</h1>
            </ContainerTitulo>
            <ContainerSetups>
                <StyledSliderContainer>
                    <Slider {...settings}>
                        <StyledSliderSlide>
                            <CardVertical />
                        </StyledSliderSlide>
                    </Slider>
                </StyledSliderContainer>
            </ContainerSetups>
        </ContainerSetupsMaisVendidos>
    );
}

export default CSetupsMaisVendidos;
