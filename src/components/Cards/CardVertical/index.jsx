import React, { useEffect, useState } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2 } from './style';
import Rating from '../../Rating';
import { SmallTitle, SubTitle, Title } from '../../../containers/Home/style';
import BDetalhes from '../../Button/Detalhes';

const CardVertical = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/Produto');
        console.log('Dados recebidos do backend:', response.data);
        // Filtrando apenas os produtos ativos
        const produtosAtivos = response.data.filter(produto => produto.ativo);
        setProdutos(produtosAtivos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <>
      {produtos.map((produto) => (
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




/*import React from 'react';
import { CardHome } from './style';
import Rating from '../../Rating';
import { SmallTitle, SubTitle, Title } from '../../../containers/Home/style';
import BDetalhes from '../../Button/Detalhes';



function CardVertical() {
    return (
        <CardHome>
  <img src="https://via.placeholder.com/150" alt="Avatar" style={{ width: "100%" }} />
  <div>
    <SubTitle>Notebook acer nitro 5 core i25, 5tb</SubTitle>
    <Title>R$ 5000,00</Title>
    <SmallTitle>12x de R$ 500,00</SmallTitle>
    <Rating />
    <span>
      <SmallTitle><span>Frete Grátis</span></SmallTitle>
    </span>
    <div className='button'> 
      <BDetalhes />
    </div>
  </div>
</CardHome>
    );
}

export default CardVertical;*/

