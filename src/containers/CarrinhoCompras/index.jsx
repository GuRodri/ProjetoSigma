import BVerMaisProdutos from "../../components/Button/VerMaisProdutos";
import CardCarrinho from "../../components/Cards/CardCarrinho";
import BProsseguirComACompra from "../../components/Button/ProsseguirComACompra";
import { ContainerCarrinho, ContainerCarrinho2, ContainerHome, ContainerMenor } from "./style";

function CarrinhoCompras() {
    return (
        <ContainerHome>
            <ContainerCarrinho>
                <CardCarrinho />
                <CardCarrinho />
                <CardCarrinho />
                <CardCarrinho />
                <CardCarrinho />
                <CardCarrinho />
            </ContainerCarrinho> 
           <ContainerCarrinho2>
                <ContainerMenor>
                    <p>[quantidade] itens no carrinho, deseja adicionar mais?</p>
                    <BVerMaisProdutos />
                </ContainerMenor>
                <ContainerMenor>
                    <p>Subtotal: R$[valor]</p>
                    <p>Frete: R$[valor]</p>
                    <BProsseguirComACompra />
                </ContainerMenor>
            </ContainerCarrinho2>    
        </ContainerHome>
    );
}

export default CarrinhoCompras;
