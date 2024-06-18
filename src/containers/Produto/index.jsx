import React, { useState, useEffect } from 'react';
import CarrosselProduto from '../../components/Carrosseis/CProduto';
import InformacaoProduto from '../../components/InformacaoProduto';
import DescricaoProduto from '../../components/DescricaoProduto';
import AvaliacaoProdutoVisualizacao from '../../components/AvaliacaoProdutoVisualizacao';
import apiCliente from '../../services/apiCliente';
import { useParams } from 'react-router-dom';
import { Container, Coluna, ContainerEspacamento, Coluna1 } from './style';

const Produto = () => {
  const { id } = useParams(); // Captura o parâmetro `idProduto` da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    console.log(`ID do produto capturado da URL: ${id}`);
    const fetchProduto = async () => {
      try {
        const response = await apiCliente.get(`/api/Produto/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };
  
    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <ContainerEspacamento>
        <Coluna>
          <CarrosselProduto imagens={[produto.imagemProduto]} />
        </Coluna>
        <Coluna>
          <InformacaoProduto
            nomeProduto={produto.nomeProduto}
            descricaoProduto={produto.descricaoProduto}
            preco={produto.preco}
            quantidadeEstoque={produto.quantidadeEstoque}
          />
        </Coluna>
      </ContainerEspacamento>
      <Coluna1>
        <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
      </Coluna1>
      <Coluna1>
        <AvaliacaoProdutoVisualizacao idProduto={produto.id} />
      </Coluna1>
    </Container>
  );
};

export default Produto;
