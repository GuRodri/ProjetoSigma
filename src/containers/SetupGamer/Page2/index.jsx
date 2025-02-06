import React, { useState } from "react";
import { Container, Coluna, ContainerEspacamento, Campo } from "./style";
import { NavLink } from "react-router-dom";
import BContinuar from "../../../components/Button/Continuar";
import aventuraImage from "../../../assets/categorias/aventuraImage.svg";
import rpgImage from "../../../assets/categorias/rpgImage.svg";
import quebraCabecaImage from "../../../assets/categorias/quebraCabecaImage.svg";
import simulacaoImage from "../../../assets/categorias/simulacaoImage.svg";
import horrorImage from "../../../assets/categorias/horrorImage.svg";
import estrategiaImage from "../../../assets/categorias/estrategiaImage.svg";
import musicaImage from "../../../assets/categorias/musicaImage.svg";
import esportesImage from "../../../assets/categorias/esporteImage.svg";

const SetupGamerPage2 = () => {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  const toggleCategoria = (categoria) => {
    if (categoriasSelecionadas.includes(categoria)) {
      setCategoriasSelecionadas(
        categoriasSelecionadas.filter((cat) => cat !== categoria)
      );
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, categoria]);
    }
  };

  return (
    <Container>
      <ContainerEspacamento>
        <h2>De que mais gosta?</h2>
        <Coluna>
          <Campo
            onClick={() => toggleCategoria("Aventura")}
            selected={categoriasSelecionadas.includes("Aventura")}
            style={{ backgroundImage: `url(${aventuraImage})` }}
          >
            <label>Aventura</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("RPG")}
            selected={categoriasSelecionadas.includes("RPG")}
            style={{ backgroundImage: `url(${rpgImage})` }}
          >
            <label>RPG</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Quebra-Cabeça")}
            selected={categoriasSelecionadas.includes("Quebra-Cabeça")}
            style={{ backgroundImage: `url(${quebraCabecaImage})` }}
          >
            <label>Quebra-Cabeça</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Simulação")}
            selected={categoriasSelecionadas.includes("Simulação")}
            style={{ backgroundImage: `url(${simulacaoImage})` }}
          >
            <label>Simulação</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Horror")}
            selected={categoriasSelecionadas.includes("Horror")}
            style={{ backgroundImage: `url(${horrorImage})` }}
          >
            <label>Horror</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Estratégia")}
            selected={categoriasSelecionadas.includes("Estratégia")}
            style={{ backgroundImage: `url(${estrategiaImage})` }}
          >
            <label>Estratégia</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Música")}
            selected={categoriasSelecionadas.includes("Música")}
            style={{ backgroundImage: `url(${musicaImage})` }}
          >
            <label>Música</label>
          </Campo>
          <Campo
            onClick={() => toggleCategoria("Esportes")}
            selected={categoriasSelecionadas.includes("Esportes")}
            style={{ backgroundImage: `url(${esportesImage})` }}
          >
            <label>Esportes</label>
          </Campo>
        </Coluna>
        <NavLink to={"/setupGamer-page3"}>
          <BContinuar />
        </NavLink>
      </ContainerEspacamento>
    </Container>
  );
};

export default SetupGamerPage2;
