import React, { useState, useEffect } from 'react';
import InformacaoProduto from '../../components/InformacaoProduto';
import DescricaoProduto from '../../components/DescricaoProduto';
import AvaliacaoProdutoVisualizacao from '../../components/AvaliacaoProdutoVisualizacao';
import apiCliente from '../../services/apiCliente';
import { useParams } from 'react-router-dom';
import { Container, ContainerEspacamento } from './style';
import CProdutoFirestore from '../../components/Carrosseis/CProdutoFirestore';

const Produto = () => {
  const { id } = useParams(); // Pega o ID do produto a partir da URL
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(`ID do produto capturado da URL: ${id}`);
    const fetchProduto = async () => {
      try {
        const response = await apiCliente.get(`/api/Produto/${id}`); // Busca o produto pela API
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        setError(true);
      }
    };

    fetchProduto();
  }, [id]);

  if (error) {
    return <div>Erro ao carregar o produto. Tente novamente mais tarde.</div>;
  }

  if (!produto) {
    return <div className="loading-spinner">Carregando...</div>;
  }

  return (
    <Container>
      <ContainerEspacamento>
          <CProdutoFirestore produtoId={id} />       
          <InformacaoProduto
            nomeProduto={produto.nomeProduto}
            descricaoProduto={produto.descricaoProduto}
            preco={produto.preco}
            quantidadeEstoque={produto.quantidadeEstoque}
          />
      </ContainerEspacamento>
        <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
        <AvaliacaoProdutoVisualizacao idProduto={id} />
    </Container>
  );
};

export default Produto;
