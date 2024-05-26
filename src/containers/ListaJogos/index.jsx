import CardAmbienteAdmin from "../../components/Cards/CardAmbienteAdmin";
import CardListaJogos from "../../components/Cards/CardListaJogos";
import CardListaUsuarios from "../../components/Cards/CardListaUsuarios";
import { ContainerCarrinho, Container } from "./style";

function ListaJogos() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardListaJogos />
            </ContainerCarrinho> 
        </Container>
           
    );
}

export default ListaJogos;