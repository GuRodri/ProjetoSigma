import React, { useState, useEffect } from 'react';
import InformacaoProduto from '../../components/InformacaoProduto';
import DescricaoProduto from '../../components/DescricaoProduto';
import AvaliacaoProdutoVisualizacao from '../../components/AvaliacaoProdutoVisualizacao';
import apiCliente from '../../services/apiCliente';
import { useParams } from 'react-router-dom';
import { Container, ContainerEspacamento, ContainerEspacamento2 } from './style';
import CProdutoFirestore from '../../components/Carrosseis/CProdutoFirestore';
import CadastroAvaliacao from '../Avaliacao/Cadastrar';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(false);

  const fetchProduto = async () => {
    try {
      console.log('Buscando produto...');
      const response = await apiCliente.get(`/api/Produto/${id}`);
      console.log('Produto retornado da API:', response.data);
      setProduto(response.data);
      setError(false);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      setError(true);
    }
  };

  useEffect(() => {
    console.log(`ID do produto capturado da URL: ${id}`);
    fetchProduto();
  }, [id]);

  if (error) {
    return (
      <Container>
        <div>
          <p>Erro ao carregar o produto. Tente novamente mais tarde.</p>
          <button onClick={fetchProduto}>Tentar Novamente</button>
        </div>
      </Container>
    );
  }

  if (!produto) {
    return (
      <Container>
        <div className="loading-spinner">Carregando...</div>
      </Container>
    );
  }

  return (
    <Container>
      <ContainerEspacamento>
        <CProdutoFirestore produtoId={id} />
        <InformacaoProduto
          idProduto={produto.idProduto || produto.id}
          nomeProduto={produto.nomeProduto}
          descricaoProduto={produto.descricaoProduto}
          preco={produto.preco}
          quantidadeEstoque={produto.quantidadeEstoque}
          mediaAvaliacao={produto.mediaAvaliacao}
          urlImagem={produto.urlImagem}
        />
      </ContainerEspacamento>
      <ContainerEspacamento2>
        <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
      </ContainerEspacamento2>
      <ContainerEspacamento2>
        <AvaliacaoProdutoVisualizacao idProduto={id} />
      </ContainerEspacamento2>
      <CadastroAvaliacao />
    </Container>
  );
};

export default Produto;
