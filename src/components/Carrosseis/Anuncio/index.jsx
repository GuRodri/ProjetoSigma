import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSliderContainer, StyledSliderImage, StyledSliderSlide } from './style';
import apiCliente from '../../../services/apiCliente';

function CAnuncio() {
  const [anuncios, setAnuncios] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1, // Altere conforme necessário
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Tempo de exibição de cada anúncio (5 segundos)
    pauseOnHover: true // Pausa quando o mouse estiver sobre o carrossel
  };

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/anuncio');
        setAnuncios(response.data);
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
      }
    };

    fetchAnuncios();
  }, []);

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        {anuncios.map((anuncio) => (
          <StyledSliderSlide key={anuncio.id}>
            <StyledSliderImage src={anuncio.referenciaImagem} alt={anuncio.titulo} />
          </StyledSliderSlide>
        ))}
      </Slider>
    </StyledSliderContainer>
  );
}

export default CAnuncio;
