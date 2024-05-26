import React, { useEffect, useState } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaProdutos = () => {
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

  const handleDisableProduto = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      if (!id) {
        console.error('ID do produto não está definido:', id);
        return;
      }
      await apiCliente.patch(`/api/Produto/${id}/disable`);
      console.log('Produto desabilitado com sucesso! ID:', id);
      const updatedProdutos = produtos.map(produto => {
        if (produto.idProduto === id) {
          return { ...produto, ativo: false };
        }
        return produto;
      });
      console.log('Lista de produtos atualizada:', updatedProdutos);
      setProdutos(updatedProdutos);
      alert('Produto desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar produto: ', error);
      alert('Erro ao desabilitar produto. Verifique o console para mais detalhes.');
    }
  };

  return (
    <>
      {produtos.map((produto) => (
        <CardHome2 key={produto.idProduto}>
          <ContainerEspacamento>
            <ContainerTexto>
              <img src={produto.imagemProduto} alt="Imagem do Produto" width='60em'/>
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
            <button onClick={() => handleDisableProduto(produto.idProduto)}>Excluir</button> <BEditar /> <BDetalhes />
          </ContainerBotao>
        </CardHome2>
      ))}
    </>
  );
};

export default CardListaProdutos;
