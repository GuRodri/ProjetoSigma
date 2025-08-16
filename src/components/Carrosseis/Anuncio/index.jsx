import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  StyledSliderContainer,
  StyledSliderImage,
  StyledSliderSlide,
  StyledMessage,
  StyledDotStyleWrapper,
  StyledDotStyle
} from './style';
import apiCliente from '../../../services/apiCliente';
import { Link } from 'react-router-dom';

function CAnuncio() {
  const [anuncios, setAnuncios] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    appendDots: dots => (
      <ul style={{ margin: "0.5em 0" }}>{dots}</ul>
    ),
    customPaging: i => (
      <StyledDotStyleWrapper>
        <StyledDotStyle />
      </StyledDotStyleWrapper>
    )
  };

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/anuncio');
        if (Array.isArray(response.data)) {
          const anunciosAtivos = response.data.filter((anuncio) => anuncio.ativo === true);
          setAnuncios(anunciosAtivos);
        } else {
          console.error('Resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
      }
    };

    fetchAnuncios();
  }, []);

  return (
    <StyledSliderContainer>
      {anuncios.length === 0 ? (
        <StyledMessage>🚫 Nenhum anúncio ativo no momento.</StyledMessage>
      ) : (
        <Slider {...settings}>
          {anuncios.map((anuncio) => (
            <Link
              key={anuncio.idAnuncio}
              to={`/produto/${anuncio.idProduto}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver anúncio: ${anuncio.titulo}`}
            >
              <StyledSliderSlide>
                <StyledSliderImage
                  src={anuncio.referenciaImagem || '/img/default.jpg'}
                  alt={anuncio.titulo}
                />
              </StyledSliderSlide>
            </Link>
          ))}
        </Slider>
      )}
    </StyledSliderContainer>
  );
}

export default CAnuncio;
