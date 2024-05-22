import { SubTitle} from "../../../containers/Home/style";
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from "./style";
import BExcluir from "../../Button/Excluir";
import BEditar from "../../Button/Editar";
import BDetalhes from "../../Button/Detalhes";

function CardListaUsuarios() {
    return (
        <CardHome2>
            <ContainerEspacamento>
                <ContainerTexto>
                    <p>Lucindo</p>
                </ContainerTexto>
                <ContainerTexto>
                    <p>da Silva</p>
                </ContainerTexto>
                <ContainerTexto>
                    <p>lucindodasilva@sigma.com</p>
                </ContainerTexto>
                <ContainerTexto>
                    <p>Sim</p>
                </ContainerTexto>
            </ContainerEspacamento>
            <ContainerBotao>
                <BExcluir /> <BEditar />
            </ContainerBotao>
        </CardHome2>
            
    )};

    export default CardListaUsuarios;