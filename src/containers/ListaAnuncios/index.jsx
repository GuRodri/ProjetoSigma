import { ContainerCarrinho, Container } from "./style";
import CardListaAnuncios from "../../components/Cards/CardListaAnuncios";

function ListaAnuncios() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardListaAnuncios />
            </ContainerCarrinho> 
        </Container>
           
    );
}

export default ListaAnuncios;