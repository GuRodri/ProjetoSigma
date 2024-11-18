import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContainer, ContainerEspacamento, ImagemCarrossel } from './style';

const CarrosselProduto = ({ imagens }) => {
  return (
    <CarouselContainer>
      <Carousel 
        showThumbs={false} /* Remove thumbnails */
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000} 
        transitionTime={600} 
        showStatus={false} /* Remove o contador de slides */
      >
        {imagens.map((url, index) => (
          <ContainerEspacamento key={index}>
            <ImagemCarrossel src={url} alt={`Imagem ${index}`} />
          </ContainerEspacamento>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarrosselProduto;
