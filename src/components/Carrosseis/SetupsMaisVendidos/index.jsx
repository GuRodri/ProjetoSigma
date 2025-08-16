import React, { useState, useEffect } from "react";
import {
  ContainerSetupsMaisVendidos,
  ContainerTitulo,
  ContainerSetups,
  StyledSliderContainer,
  StyledSliderSlide,
} from "./style";
import CardVertical from "../../Cards/CardVertical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiCliente from "../../../services/apiCliente";

function CSetupsMaisVendidos() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos.slice(0, 12)); // Limita a 12 produtos
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  const settings = {
    dots: true,
    infinite: produtos.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, produtos.length),
    slidesToScroll: Math.min(4, produtos.length),
    autoplay: produtos.length > 4,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, produtos.length),
          slidesToScroll: Math.min(3, produtos.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, produtos.length),
          slidesToScroll: Math.min(2, produtos.length),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ContainerSetupsMaisVendidos>
      <ContainerTitulo>
        <h1>Setups mais vendidos</h1>
      </ContainerTitulo>
      <ContainerSetups>
        <StyledSliderContainer>
          {isLoading && <div style={{ color: '#fff', padding: '2rem' }}>Carregando...</div>}
          {hasError && (
            <div style={{ color: '#ff6b6b', padding: '2rem', textAlign: 'center' }}>
              Erro ao carregar produtos. Por favor, tente novamente mais tarde.
            </div>
          )}
          {!isLoading && !hasError && produtos.length > 0 && (
            <Slider {...settings}>
              {produtos.map((produto) => (
                <StyledSliderSlide key={produto.idProduto}>
                  <CardVertical produtos={[produto]} />
                </StyledSliderSlide>
              ))}
            </Slider>
          )}
          {!isLoading && !hasError && produtos.length === 0 && (
            <div style={{ color: '#ccc', padding: '2rem', textAlign: 'center' }}>
              Nenhum produto disponível.
            </div>
          )}
        </StyledSliderContainer>
      </ContainerSetups>
    </ContainerSetupsMaisVendidos>
  );
}

export default CSetupsMaisVendidos;
