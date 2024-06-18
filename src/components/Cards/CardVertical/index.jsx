import React from 'react';
import { CardHome2, NomeProd, Button} from './style';
import Rating from '../../Rating';
import { SmallTitle, SubTitle, Title } from '../../../containers/Home/style';
import { useNavigate } from 'react-router-dom';

const CardVertical = ({ produtos = [], searchTerm }) => {
  const navigate = useNavigate(); // Hook do React Router para navegação

  // Filtrando produtos com base no termo de pesquisa
  const filteredProdutos = produtos.filter(produto => {
    const nomeProduto = produto.nomeProduto || ''; 
    const term = searchTerm || ''; 
    return nomeProduto.toLowerCase().includes(term.toLowerCase());
  });

  // Função para lidar com o clique no botão Detalhes
  const handleDetalhesClick = (idProduto) => {
    navigate(`/produto/${idProduto}`); // Redireciona para a rota de detalhes do produto
    console.log('Clicou no botão Detalhes do produto:', idProduto);
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
            <Title>{produto.preco}</Title>
            <SmallTitle>12x de R$ 500,00</SmallTitle>
            <Rating />
            <span>
              <SmallTitle><span>Frete Grátis</span></SmallTitle>
            </span>
            <div>
              {/* Passando a função de callback para o componente BDetalhes */}
              <Button onClick={() => handleDetalhesClick(produto.idProduto)} >Detalhes</Button>
            </div>
          </div>
        </CardHome2>
      ))}
    </>
  );
};

export default CardVertical;
