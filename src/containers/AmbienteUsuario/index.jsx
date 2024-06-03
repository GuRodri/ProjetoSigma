import React from "react";
import { Container, Card} from "./style";
import CardAmbienteUsuario from "../../components/Cards/CardAmbienteUsuario";
import { useAuth } from "../../context/authContext";


function AmbienteUsuario() {

    const { currentUser } = useAuth();

    return (
        <Container>
            <p>Olá, {currentUser && currentUser.role === 0 ? currentUser.email : "Usuário"} em que podemos ajudar?</p>
            <Card>
                <CardAmbienteUsuario />
            </Card>
        </Container>
    );
}
export default AmbienteUsuario;
