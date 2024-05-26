import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";
import CardListaUsuarios from "../../components/Cards/CardListaUsuarios";
import { ContainerCarrinho, Container } from "./style";

function ListaUsuarios() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardListaUsuarios />
            </ContainerCarrinho> 
        </Container>
           
    );
}

export default ListaUsuarios;