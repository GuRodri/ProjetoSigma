import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ContainerEspacamento } from './style'; // Verifique o caminho do arquivo de estilos

const CarrosselProduto = ({ imagens }) => {
  return (
    <Carousel>
      <ContainerEspacamento>
        {imagens.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Imagem ${index}`} style={{ width: "60%", borderRadius: "10px" }} />
          </div>
        ))}
      </ContainerEspacamento>
    </Carousel>
  );
};

export default CarrosselProduto;
