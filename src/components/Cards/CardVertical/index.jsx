import React from 'react';
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
    <div className='button'> {/* Adicionando a classe 'button' aqui */}
      <BDetalhes />
    </div>
  </div>
</CardHome>
    );
}

export default CardVertical;

