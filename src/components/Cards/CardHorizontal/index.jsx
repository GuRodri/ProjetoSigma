import React from 'react';
import { SubTitle } from "../../../containers/Home/style";
import Button from "../../Button/Detalhes";
import { CardHome2, ContainerTexto, ContainerRating } from "./style";
import Rating from "../../Rating";

function CardHorizontal() {
  return (
    <CardHome2>
      <img src="https://via.placeholder.com/150" alt="Avatar" style={{ width: "100%" }} />
      <ContainerTexto>
        <SubTitle>Notebook acer nitro 5 core i25, 5tbmmmmmnnnnnnnnnnnnnnnmmmmmmmmmmmmm</SubTitle>
        <ContainerRating>
          <SubTitle>R$ 5000,00</SubTitle>
          <div>
            <Rating />
          </div>
        </ContainerRating>
        <h3>Ou em até 10x sem juros no cartão</h3>
        <h3>Frete Grátis</h3>
      </ContainerTexto>
      <div className='button'>
        <Button />
      </div>
    </CardHome2>
  );
}

export default CardHorizontal;
