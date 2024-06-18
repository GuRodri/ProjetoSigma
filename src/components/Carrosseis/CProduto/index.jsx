import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarrosselProduto = ({ imagens }) => {
  return (
    <Carousel>
      {imagens.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Imagem ${index}`} style={{ width: "50%" }} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarrosselProduto;
