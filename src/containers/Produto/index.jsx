// Produto.jsx
import React, { useState, useEffect } from 'react';
import CarrosselProduto from '../../components/Carrosseis/CProduto';
import InformacaoProduto from '../../components/InformacaoProduto';
import DescricaoProduto from '../../components/DescricaoProduto';
import apiCliente from '../../services/apiCliente';
import { useParams } from 'react-router-dom';
import { Container, Coluna, ContainerEspacamento } from './style'; // Verifique o caminho do arquivo de estilos
import AvaliacaoProduto from '../../components/AvaliacaoProduto'; // Importe o componente AvaliacaoProduto

const Produto = () => {
  const { id } = useParams(); // Captura o parâmetro `id` da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
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
      <Coluna>
        <DescricaoProduto fichaTecnica={produto.fichaTecnica} />
      </Coluna>
      </ContainerEspacamento>
      <Coluna>
        <AvaliacaoProduto idProduto={produto.idProduto} />
      </Coluna>
    </Container>
  );
};

export default Produto;
