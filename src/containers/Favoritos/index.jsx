import { ContainerCarrinho, Container } from "./style";
import CardHorizontal from "../../components/Cards/CardHorizontal";

function Favoritos() {
    return (
        <Container>
            <ContainerCarrinho>
                <CardHorizontal />
            </ContainerCarrinho> 
        </Container>   
    );
}

export default Favoritos;