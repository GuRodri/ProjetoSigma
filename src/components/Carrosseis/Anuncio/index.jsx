import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSliderContainer, StyledSliderImage, StyledSliderSlide } from './style';
import apiCliente from '../../../services/apiCliente';
import { Link } from 'react-router-dom';

function CAnuncio() {
  const [anuncios, setAnuncios] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true
  };

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/anuncio');

        // Certifique-se de que a resposta seja um array
        if (Array.isArray(response.data)) {
          // Filtra os anúncios com campo 'ativo' igual a 1
          const anunciosAtivos = response.data.filter((anuncio) => anuncio.ativo === true);
          
          setAnuncios(anunciosAtivos);
        } else {
          console.error('A resposta da API não é um array:', response.data);
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
        <p>Não há anúncios ativos para exibir.</p> // Mensagem de fallback
      ) : (
        <Slider {...settings}>
          {anuncios.map((anuncio) => (
            <Link key={anuncio.idAnuncio} to={`/produto/${anuncio.idProduto}`} target="_blank" rel="noopener noreferrer">
              <StyledSliderSlide>
                <StyledSliderImage src={anuncio.referenciaImagem} alt={anuncio.titulo} />
              </StyledSliderSlide>
            </Link>
          ))}
        </Slider>
      )}
    </StyledSliderContainer>
  );
}

export default CAnuncio;
