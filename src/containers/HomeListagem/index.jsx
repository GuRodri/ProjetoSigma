import React, { useEffect, useState, useContext } from 'react';
import { ContainerHome, ContainerListagem } from "./style";
import { SearchContext } from '../../context/searchCoxtexto';
import CardVertical from "../../components/Cards/CardVertical";
import apiCliente from '../../services/apiCliente';

function HomeListagem() {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const { globalSearchTerm } = useContext(SearchContext);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await apiCliente.get('/api/Produto');
                console.log('API Response:', response); // Log da resposta da API
                const produtosAtivos = response.data.filter(produto => produto.ativo);
                setProdutos(produtosAtivos);
                console.log('Produtos Ativos:', produtosAtivos); // Log dos produtos ativos
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (hasError) {
        return <div>Erro ao carregar produtos.</div>;
    }

    if (produtos.length === 0) {
        return <div>Nenhum produto encontrado.</div>;
    }

    return (
        <ContainerHome>
            <ContainerListagem>
                <CardVertical produtos={produtos} searchTerm={globalSearchTerm} />
            </ContainerListagem>
        </ContainerHome>
    );
}

export default HomeListagem;
