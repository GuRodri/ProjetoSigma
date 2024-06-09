import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BEditarProduto from '../../Button/EditarProduto';

const CardListaProdutos = ({ searchTerm }) => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await apiCliente.get('/api/produto');
        const activeProdutos = response.data.filter(produto => produto.ativo);
        setProdutos(activeProdutos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleDisableProduto = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/produto/${id}/disable`);
      const updatedProdutos = produtos.map(produto => {
        if (produto.idProduto === id) {
          return { ...produto, ativo: false };
        }
        return produto;
      });
      setProdutos(updatedProdutos);
      alert('Produto desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar produto: ', error);
      alert('Erro ao desabilitar produto. Verifique o console para mais detalhes.');
    }
  };

  const filteredProdutos = produtos.filter(produto => {
    const nomeProduto = `${produto.nomeProduto}`.toLowerCase();
    return nomeProduto.includes((searchTerm || '').toLowerCase());
  });

  const handleDetalhes = (id) => {
    navigate(`/detalhes-produtos/${id}`);
  };

  return (
    <>
      {filteredProdutos.map((produto) => (
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
            <button className='BExcluir' onClick={() => handleDisableProduto(produto.idProduto)}>Excluir</button> 
            <BEditarProduto id={produto.idProduto} />
            <button className='BDetalhes' onClick={() => handleDetalhes(produto.idProduto)}>Detalhes</button> 
          </ContainerBotao>
        </CardHome2>
      ))}
    </>
  );
};

export default CardListaProdutos;
