import React, { useState } from "react";
import { Container, Coluna, ContainerEspacamento, Input, ErrorMessage } from "./style";
import BContinuar from "../../../components/Button/Continuar";
import { NavLink } from "react-router-dom";

const sanitizeInput = (input) => {
    return input.replace(/["'%;()\-]/g, "");
};

const SetupGamerPage1 = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        if (!nome.trim() || !idade.trim()) {
            e.preventDefault();
            setError("Todos os campos devem ser preenchidos.");
        } else {
            setError("");
        }
    };

    return (
        <Container>
            <ContainerEspacamento>
                <h1>Vamos começar...</h1>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Coluna>
                    <label>Nome</label>
                    <Input
                        type="text"
                        placeholder="Digite seu nome"
                        alt="Digite o seu nome"
                        value={nome}
                        onChange={(e) => setNome(sanitizeInput(e.target.value))}
                    />
                </Coluna>
                <Coluna>
                    <label>Idade</label>
                    <Input
                        type="number"
                        placeholder="Digite sua idade"
                        alt="Digite a sua idade"
                        value={idade}
                        onChange={(e) => setIdade(sanitizeInput(e.target.value))}
                    />
                </Coluna>
                <NavLink to={'/setupGamer-page2'} style={{ display: 'flex', justifyContent: 'center' }} onClick={handleSubmit}>
                    <BContinuar />
                </NavLink>
            </ContainerEspacamento>
        </Container>
    );
};

export default SetupGamerPage1;
