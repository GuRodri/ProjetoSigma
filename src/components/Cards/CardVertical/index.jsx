import React, { useState, useEffect } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2 } from './style';
import Rating from '../../Rating';
import { SmallTitle, SubTitle, Title } from '../../../containers/Home/style';
import BDetalhes from '../../Button/Detalhes';

const CardVertical = ({ searchTerm }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const filteredProdutos = produtos.filter(produto => {
    const nomeProduto = produto.nomeProduto || ''; 
    const term = searchTerm || ''; 
    return nomeProduto.toLowerCase().includes(term.toLowerCase());
  });

  return (
    <>
      {filteredProdutos.map((produto) => (
        <CardHome2 key={produto.idProduto}>
          <img src={produto.imagemProduto} alt="Imagem do Produto" width='150em'/>
          <div>
            <SubTitle>{produto.nomeProduto}</SubTitle>
            <Title>{produto.preco}</Title>
            <SmallTitle>12x de R$ 500,00</SmallTitle>
            {produto.classificacao}
            <Rating />
            <span>
              <SmallTitle><span>Frete Grátis</span></SmallTitle>
            </span>
            <div className='button'> 
              <BDetalhes />
            </div>
          </div>
        </CardHome2>
      ))}
    </>
  );
};

export default CardVertical;
