import { SubTitle} from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from "./style";
import BExcluir from "../../Button/Excluir";
import BEditar from "../../Button/Editar";

function CardListaUsuarios() {
    return (
        <CardHome2>
            <ContainerEspacamento>
                <ContainerTexto>
                    <SubTitle>nome</SubTitle>
                    <p>Lucindo</p>
                </ContainerTexto>
                <ContainerTexto>
                    <SubTitle>sobrenome</SubTitle>
                    <p>da Silva</p>
                </ContainerTexto>
                <ContainerTexto>
                    <SubTitle>email</SubTitle>
                    <p>lucindodasilva@sigma.com</p>
                </ContainerTexto>
                <ContainerTexto>
                    <SubTitle>ativo?</SubTitle>
                    <p>Sim</p>
                </ContainerTexto>
            </ContainerEspacamento>
            <ContainerBotao>
                <BExcluir /> <BEditar />
            </ContainerBotao>
        </CardHome2>
            
    )};

    export default CardListaUsuarios;