import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaProdutos = ({ produto, handleDisableProduto }) => {
  return (
    <CardHome2 key={produto.idProduto}>
      <ContainerEspacamento>
        <ContainerTexto>
          <img src={produto.imagemProduto} alt="Imagem do Produto" width='60em' />
        </ContainerTexto>
        <ContainerTexto>
          <p>{produto.idProduto}</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>{produto.nomeProduto}</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>{produto.preco}</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>{produto.quantidadeEstoque}</p>
        </ContainerTexto>
      </ContainerEspacamento>
      <ContainerBotao>
        <button onClick={() => handleDisableProduto(produto.idProduto)}>Excluir</button> 
        <BEditar /> 
        <BDetalhes />
      </ContainerBotao>
    </CardHome2>
  );
};

export default CardListaProdutos;
