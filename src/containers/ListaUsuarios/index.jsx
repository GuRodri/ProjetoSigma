import CardListaUsuarios from "../../components/Cards/CardListaUsuarios";
import { ContainerCarrinho, Container } from "./style";

function ListaUsuarios() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardListaUsuarios />
                <CardListaUsuarios />
                <CardListaUsuarios />
                <CardListaUsuarios />
                <CardListaUsuarios />
                <CardListaUsuarios />
            </ContainerCarrinho> 
        </Container>
           
    );
}

export default ListaUsuarios;