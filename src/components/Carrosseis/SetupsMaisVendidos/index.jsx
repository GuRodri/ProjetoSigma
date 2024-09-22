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
    slidesToShow: 4, // Mostrar 4 slides por vez em telas grandes
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Para telas menores que 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Para telas menores que 768px (celulares)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Para telas menores que 480px (celulares pequenos)
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
    </ContainerSetupsMaisVendidos>
  );
}

export default CSetupsMaisVendidos;
