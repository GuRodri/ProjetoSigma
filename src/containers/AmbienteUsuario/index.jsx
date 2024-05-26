import React from "react";
import { Container, Card} from "./style";
import CardAmbienteUsuario from "../../components/Cards/CardAmbienteUsuario";


function AmbienteUsuario() {

    return (
        <Container>
            <h1>Olá, em que podemos ajudar?</h1>
            <Card>
                <CardAmbienteUsuario />
            </Card>
        </Container>
    );
}
export default AmbienteUsuario;
