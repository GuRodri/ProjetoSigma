/*import React, { useState, useEffect } from 'react';
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
        console.log('Buscando produto...');
        const response = await apiCliente.get(`/api/Produto/${id}`); // Busca o produto pela API
        console.log('Produto retornado da API:', response.data); // Verifica os dados do produto
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        setError(true);
      }
    };
  
    fetchProduto();
  }, [id]);
  

  if (error) {
    return (
      <div>
        <p>Erro ao carregar o produto. Tente novamente mais tarde.</p>
        <button onClick={() => { setError(false); fetchProduto(); }}>Tentar Novamente</button>
      </div>
    );
  }

  if (!produto) {
    return <div className="loading-spinner">Carregando...</div>;
  }

  return (
    <Container>
      <ContainerEspacamento>
        <CProdutoFirestore produtoId={id} />
        <InformacaoProduto
          idProduto={produto.id} // Passando o id do produto
          nomeProduto={produto.nomeProduto}
          descricaoProduto={produto.descricaoProduto}
          preco={produto.preco}
          quantidadeEstoque={produto.quantidadeEstoque}
          mediaAvaliacao={produto.mediaAvaliacao} // Certifique-se de passar a média de avaliação se disponível
          urlImagem={produto.urlImagem} // Adicione o campo da URL da imagem
        />
      </ContainerEspacamento>
      <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
      <AvaliacaoProdutoVisualizacao idProduto={id} />
    </Container>
  );
};

export default Produto;*/

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

  const fetchProduto = async () => {
    try {
      console.log('Buscando produto...');
      const response = await apiCliente.get(`/api/Produto/${id}`); // Busca o produto pela API
      console.log('Produto retornado da API:', response.data); // Verifica os dados do produto
      setProduto(response.data);
      setError(false); // Resetar erro se a busca for bem-sucedida
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
      <div>
        <p>Erro ao carregar o produto. Tente novamente mais tarde.</p>
        <button onClick={fetchProduto}>Tentar Novamente</button>
      </div>
    );
  }

  if (!produto) {
    return <div className="loading-spinner">Carregando...</div>;
  }

  return (
    <Container>
      <ContainerEspacamento>
        <CProdutoFirestore produtoId={id} />
        <InformacaoProduto
          idProduto={produto.id} // Passando o id do produto
          nomeProduto={produto.nomeProduto}
          descricaoProduto={produto.descricaoProduto}
          preco={produto.preco}
          quantidadeEstoque={produto.quantidadeEstoque}
          mediaAvaliacao={produto.mediaAvaliacao} // Certifique-se de passar a média de avaliação se disponível
          urlImagem={produto.urlImagem} // Adicione o campo da URL da imagem
        />
      </ContainerEspacamento>
      <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
      <AvaliacaoProdutoVisualizacao idProduto={id} />
    </Container>
  );
};

export default Produto;

