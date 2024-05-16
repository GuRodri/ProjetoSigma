import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSliderContainer, StyledSliderImage, StyledSliderSlide } from './style';
import ImagemAnuncio from '../../../assets/Img/anuncios/ImagemAnuncio.png';
function CAnuncio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1, // Altere conforme necessário
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tempo de exibição de cada anúncio (5 segundos)
    pauseOnHover: true // Pausa quando o mouse estiver sobre o carrossel
  };

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        <StyledSliderSlide>
          <StyledSliderImage src={ImagemAnuncio} alt="Imagem 3" />
        </StyledSliderSlide>
        <StyledSliderSlide>
          <StyledSliderImage src={ImagemAnuncio} alt="Imagem 3" />  
        </StyledSliderSlide>
        <StyledSliderSlide>
          <StyledSliderImage src={ImagemAnuncio} alt="Imagem 3" />
        </StyledSliderSlide>
      </Slider>
    </StyledSliderContainer>
  );
}

export default CAnuncio;

