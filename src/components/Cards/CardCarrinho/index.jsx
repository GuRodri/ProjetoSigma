import React, { useState, useEffect } from 'react';
import { SubTitle } from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerTexto, Select1, Container } from "./style";
import apiCliente from '../../../services/apiCliente';

const CardCarrinho = ({ idCarrinho }) => {
  const [carrinhoItem, setCarrinhoItem] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    const fetchCarrinhoItem = async () => {
      try {
        // Faz a requisição para buscar os dados do item no carrinho
        const response = await apiCliente.get(`/api/Carrinho/${idCarrinho}`); // Substitua pelo endpoint correto
        setCarrinhoItem(response.data); // Supondo que a resposta contenha os dados do item
      } catch (error) {
        console.error('Erro ao buscar dados do carrinho:', error);
      }
    };

    if (idCarrinho) {
      fetchCarrinhoItem();
    }
  }, [idCarrinho]);

  // Se não houver item no carrinho, exibe uma mensagem de carregamento ou nada
  if (!carrinhoItem) {
    return <div>Carregando...</div>;
  }

  return (
    <CardHome2>
      <Container>
        <img 
          src={carrinhoItem.urlImagem || "https://via.placeholder.com/150"} 
          alt="Produto" 
          style={{ width: "100%" }} 
        />
        <ContainerTexto>
          <ContainerEspacamento>
            <SubTitle>{carrinhoItem.descricaoProduto}</SubTitle>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <Select1 value={quantidade} onChange={(e) => setQuantidade(e.target.value)}>
              {Array.from({ length: 13 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </Select1>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <SubTitle>R$ {carrinhoItem.precoUnitario.toFixed(2)}</SubTitle>
          </ContainerEspacamento>
        </ContainerTexto>
      </Container>
    </CardHome2>
  );
};

export default CardCarrinho;
