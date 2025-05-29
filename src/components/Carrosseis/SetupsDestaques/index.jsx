import React, { useState, useEffect } from "react";
import {
  Destaques,
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

function CDestaques() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Destaques>
      <ContainerTitulo>
        <h1>Destaques</h1>
      </ContainerTitulo>
      <ContainerSetups>
        <StyledSliderContainer>
          {isLoading && <div>Carregando...</div>}
          {hasError && (
            <div>Erro ao carregar produtos. Por favor, tente novamente mais tarde.</div>
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
            <div>Nenhum produto disponível.</div>
          )}
        </StyledSliderContainer>
      </ContainerSetups>
    </Destaques>
  );
}

export default CDestaques;
