import React from "react";
import { Container, Card} from "./style";
import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";


function AmbienteUsuario() {

    return (
        <Container>
            <h1>Olá, em que podemos ajudar?</h1>
            <Card>
                <CardAmbienteAdmin />
            </Card>
        </Container>
    );
}
export default AmbienteUsuario;
