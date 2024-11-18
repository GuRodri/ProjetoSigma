import React, { useState, useEffect } from 'react';
import { CardHome2, NomeProd, Button } from './style';
import StarRating from '../../Rating';
import { SmallTitle, Title } from '../../../containers/Home/style';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../../services/apiCliente';

const CardVertical = ({ produtos = [], searchTerm }) => {
  const navigate = useNavigate();
  const [avaliacoes, setAvaliacoes] = useState({});

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const responses = await Promise.all(
          produtos.map(produto =>
            apiCliente.get(`/api/Avaliacao?idProduto=${produto.idProduto}`)
          )
        );

        const avaliacoesMap = responses.reduce((acc, response, index) => {
          const produtoId = produtos[index].idProduto;
          acc[produtoId] = response.data;
          return acc;
        }, {});

        setAvaliacoes(avaliacoesMap);
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
      }
    };

    if (produtos.length > 0) {
      fetchAvaliacoes();
    }
  }, [produtos]);

  const filteredProdutos = produtos.filter(produto => {
    const nomeProduto = produto.nomeProduto || '';
    const term = searchTerm || '';
    return nomeProduto.toLowerCase().includes(term.toLowerCase());
  });

  const handleDetalhesClick = (idProduto) => {
    navigate(`/produto/${idProduto}`);
  };

  const calcularMediaAvaliacao = (avaliacoes) => {
    if (!avaliacoes || avaliacoes.length === 0) return 0;
    const somaClassificacoes = avaliacoes.reduce((acc, curr) => acc + curr.classificacao, 0);
    const media = somaClassificacoes / avaliacoes.length;
    return media.toFixed(1);
  };

  return (
    <>
      {filteredProdutos.map((produto) => (
        <CardHome2 key={produto.idProduto}>
          <div className='Ajusteimagem'>
            <img src={produto.imagemProduto} alt="Imagem do Produto" />
          </div>
          <div>
            <NomeProd>
              <h2>{produto.nomeProduto}</h2>
            </NomeProd>
            <Title>R$ {produto.preco}</Title>
            <StarRating 
              value={parseFloat(calcularMediaAvaliacao(avaliacoes[produto.idProduto]))} 
              readOnly 
            />
            <div>
              <Button onClick={() => handleDetalhesClick(produto.idProduto)}>Detalhes</Button>
            </div>
          </div>
        </CardHome2>
      ))}
    </>
  );
};

export default CardVertical;
