import CardVertical from "../../components/Cards/CardVertical";
import { ContainerHome } from "./style";
import { ContainerListagem } from "./style";


function HomeListagem() {
    return (
        <ContainerHome>
            <ContainerListagem>
                <CardVertical /> 
            </ContainerListagem>    
        </ContainerHome>
    );
}

export default HomeListagem;