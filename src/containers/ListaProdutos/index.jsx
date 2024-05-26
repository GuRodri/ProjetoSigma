import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";
import CardListaProdutos from "../../components/Cards/CardListaProdutos";
import CardListaUsuarios from "../../components/Cards/CardListaUsuarios";
import { ContainerCarrinho, Container } from "./style";

function ListaProdutos() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardListaProdutos />
            </ContainerCarrinho> 
        </Container>
           
    );
}

export default ListaProdutos;