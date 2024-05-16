import { SubTitle} from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerTexto, Select1, Container } from "./style";

function CardCarrinho() {
    return (
        <CardHome2>
            <Container>
                <img src="https://via.placeholder.com/150" alt="Avatar" style={{ width: "100%" }} />
                <ContainerTexto>
                    <ContainerEspacamento>
                        <SubTitle>Notebook acer nitro 5 core i25, 5tbmmmmmnnnnnnnnnnnnnnnmmmmmmmmmmmmm</SubTitle>
                    </ContainerEspacamento>
                    <ContainerEspacamento>
                        <Select1>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </Select1>
                    </ContainerEspacamento>
                    <ContainerEspacamento>
                        <SubTitle>R$ 5000,00</SubTitle>
                    </ContainerEspacamento>
                </ContainerTexto>
            </Container>
        </CardHome2>
            
    )};

    export default CardCarrinho;