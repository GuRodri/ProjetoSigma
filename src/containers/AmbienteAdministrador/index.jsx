import React from "react";
import { Container, Card } from "./style";
import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";
import { useAuth } from "../../context/authContext";

function AmbienteAdministrador() {
    const { currentUser } = useAuth();

    return (
        <Container>
            <p>Olá {currentUser && currentUser.role === 1 ? currentUser.email : "Usuário"} em que podemos ajudar?</p>
            <Card>
                <CardAmbienteAdmin />
            </Card>
        </Container>
    );
}

export default AmbienteAdministrador;