import React from "react";
import { Container, Card} from "./style";
import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";


function AmbienteAdministrador() {

    return (
        <Container>
            <h1>Olá [Usuario] em que podemos ajudar?</h1>
            <Card>
                <CardAmbienteAdmin />
            </Card>
        </Container>
    );
}
export default AmbienteAdministrador;
