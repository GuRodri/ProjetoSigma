import React, { useState, useEffect } from "react";
import {
    ContainerSetupsMaisVendidos,
    ContainerTitulo,
    ContainerSetups,
    StyledSliderContainer,
    StyledSliderSlide
} from "./style";
import CardVertical from "../../Cards/CardVertical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiCliente from "../../../services/apiCliente";

function CDestaques() {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await apiCliente.get('/api/Produto');
                const produtosAtivos = response.data.filter(produto => produto.ativo);
                setProdutos(produtosAtivos);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setIsLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Altere conforme necessário
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Tempo de exibição de cada anúncio (5 segundos)
        pauseOnHover: true // Pausa quando o mouse estiver sobre o carrossel
    };

    return (
        <ContainerSetupsMaisVendidos>
            <ContainerTitulo>
                <h1>Setups mais vendidos</h1>
            </ContainerTitulo>
            <ContainerSetups>
                <StyledSliderContainer>
                    {!isLoading && produtos.length > 0 && (
                        <Slider {...settings}>
                            {produtos.map((produto) => (
                                <StyledSliderSlide key={produto.idProduto}>
                                    <CardVertical 
                                        key={produto.idProduto}
                                        produto={produto}
                                    />
                                </StyledSliderSlide>
                            ))}
                        </Slider>
                    )}
                    {isLoading && <div>Carregando...</div>}
                    {!isLoading && produtos.length === 0 && <div>Nenhum produto disponível.</div>}
                </StyledSliderContainer>
            </ContainerSetups>
        </ContainerSetupsMaisVendidos>
    );
}

export default CDestaques;
