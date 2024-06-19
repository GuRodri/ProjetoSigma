import React from 'react';
import { SubTitle } from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerTexto, Select1, Container } from "./style";

const selectOptions = Array.from({ length: 13 }, (_, i) => i);

function CardCarrinho() {
  return (
    <CardHome2>
      <Container>
        <img src="https://via.placeholder.com/150" alt="Avatar" style={{ width: "100%" }} />
        <ContainerTexto>
          <ContainerEspacamento>
            <SubTitle>Notebook acer nitro 5 core i25, 5tbmmmmmnnnnnnnnnnnnnnnmmmmmmmmmmmmm</SubTitle>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <Select1>
              {selectOptions.map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </Select1>
          </ContainerEspacamento>
          <ContainerEspacamento>
            <SubTitle>R$ 5000,00</SubTitle>
          </ContainerEspacamento>
        </ContainerTexto>
      </Container>
    </CardHome2>
  );
}

export default CardCarrinho;
