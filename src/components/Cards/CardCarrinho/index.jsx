import React, { useState, useEffect } from 'react';
import { SubTitle } from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerTexto, Select1, Container } from "./style";
import apiCliente from '../../../services/apiCliente';



const CardCarrinho = (props) => {
  // Aceita tanto maiúsculo quanto minúsculo
  const idItemCarrinho = props.idItemCarrinho || props.IDItemCarrinho;
  const idProduto = props.idProduto || props.IDProduto;
  const quantidade = props.quantidade || props.Quantidade || 1;
  const precoUnitario = props.precoUnitario || props.PrecoUnitario || 0;
  const urlImagem = props.urlImagem || props.URLImagem || "https://via.placeholder.com/150";
  const descricaoProduto = props.descricaoProduto || props.DescricaoProduto || "Produto";

  const [qtd, setQtd] = useState(quantidade);

  return (
    <CardHome2>
      <Container>
        <img 
          src={urlImagem} 
          alt="Produto" 
          style={{ width: "100%" }} 
        />
        <ContainerTexto>
          <ContainerEspacamento>
            <SubTitle>{descricaoProduto}</SubTitle>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <Select1 value={qtd} onChange={(e) => setQtd(Number(e.target.value))}>
              {Array.from({ length: 13 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </Select1>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <SubTitle>R$ {Number(precoUnitario).toFixed(2)}</SubTitle>
          </ContainerEspacamento>
        </ContainerTexto>
      </Container>
    </CardHome2>
  );
};

export default CardCarrinho;
