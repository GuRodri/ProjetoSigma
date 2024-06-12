import React from 'react';
import { CardHome2, NomeProd } from './style';
import Rating from '../../Rating';
import { SmallTitle, SubTitle, Title } from '../../../containers/Home/style';
import BDetalhes from '../../Button/Detalhes';

const CardVertical = ({ produtos = [], searchTerm }) => { // Valor padrão para produtos
  const filteredProdutos = produtos.filter(produto => {
    const nomeProduto = produto.nomeProduto || ''; 
    const term = searchTerm || ''; 
    return nomeProduto.toLowerCase().includes(term.toLowerCase());
  });

  return (
    <>
      {filteredProdutos.map((produto) => (
        <CardHome2 key={produto.idProduto}>
          <div className='Ajusteimagem'>
            <img src={produto.imagemProduto} alt="Imagem do Produto" />
          </div>
          <div>
            <NomeProd >
                <SubTitle >{produto.nomeProduto}</SubTitle>
            </NomeProd>
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
