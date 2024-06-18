import React from "react";
import { Container, Coluna, ContainerEspacamento, Input } from "./style";
import BContinuar from "../../../components/Button/Continuar";
import { NavLink } from "react-router-dom";

const SetupGamerPage1 = () => {
    return (
        <Container>
            <ContainerEspacamento>
            <h1>Vamos começar...</h1>
                <Coluna>
                    <label>Nome</label>
                    <Input type="text" placeholder="digite seu nome" alt="digite o seu nome" />
                </Coluna>
                <Coluna>
                    <label>Idade</label>
                    <Input type="Number" placeholder="digite sua idade" alt="Digite a sua idade" />
                </Coluna>
                <NavLink to={'/setupGamer-page2'} style={{display:'flex', justifyContent:'center'}}>
                    <BContinuar />
                </NavLink>
            </ContainerEspacamento>
        </Container>
    );
}

export default SetupGamerPage1;
