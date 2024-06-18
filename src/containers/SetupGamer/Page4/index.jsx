import React, { useState } from "react";
import { Container, Coluna, ContainerEspacamento, Campo } from "./style";
import { NavLink } from "react-router-dom";
import BContinuar from "../../../components/Button/Continuar";

const SetupGamerPage4 = () => {
    const [streaming, setStreaming] = useState("");

    const handleSelection = (value) => {
        setStreaming(value);
    };

    return (
        <Container>
            <ContainerEspacamento>
                <h1>Faz Streaming?</h1>
                <Coluna>
                    <Campo
                        selected={streaming === "sim"}
                        onClick={() => handleSelection("sim")}
                    >
                        <label>Sim</label>
                        <input
                            type="radio"
                            name="streaming"
                            value="sim"
                            checked={streaming === "sim"}
                            onChange={() => handleSelection("sim")}
                            style={{ display: "none" }}
                        />
                    </Campo>
                    <Campo
                        selected={streaming === "nao"}
                        onClick={() => handleSelection("nao")}
                    >
                        <label>Não</label>
                        <input
                            type="radio"
                            name="streaming"
                            value="nao"
                            checked={streaming === "nao"}
                            onChange={() => handleSelection("nao")}
                            style={{ display: "none" }}
                        />
                    </Campo>
                </Coluna>
                <NavLink to={'/setupGamer-page5'}>
                    <BContinuar />
                </NavLink>
            </ContainerEspacamento>
        </Container>
    );
}

export default SetupGamerPage4;
