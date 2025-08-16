
import React, { useEffect, useState } from "react";
import BVerMaisProdutos from "../../components/Button/VerMaisProdutos";
import CardCarrinho from "../../components/Cards/CardCarrinho";
import BProsseguirComACompra from "../../components/Button/ProsseguirComACompra";
import { ContainerCarrinho, ContainerCarrinho2, ContainerHome, ContainerMenor } from "./style";
import apiCliente from "../../services/apiCliente";
import { useAuth } from "../../context/autContexto1";

function CarrinhoCompras() {
    const { currentUser } = useAuth();
    const [itens, setItens] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [frete, setFrete] = useState(0); // ajuste conforme regra de frete
    const [idCarrinho, setIdCarrinho] = useState(null);

    useEffect(() => {
        const fetchCarrinho = async () => {
            if (!currentUser) {
                console.log('Usuário não está logado:', currentUser);
                return;
            }
            try {
                                console.log('Buscando carrinho para usuário:', currentUser.idUsuario);
                                const resCarrinho = await apiCliente.get(`/api/carrinhoCompra/${currentUser.idUsuario}`);
                                console.log('Resposta carrinho:', resCarrinho.data);
                                const carrinho = resCarrinho.data;
                                // Suporte para array ou objeto
                                let idCarrinho = carrinho.IDCarrinho || carrinho.idCarrinho;
                                if (Array.isArray(carrinho) && carrinho.length > 0) {
                                    idCarrinho = carrinho[0].IDCarrinho || carrinho[0].idCarrinho;
                                }
                                setIdCarrinho(idCarrinho);

                                if (idCarrinho) {
                                    const resItens = await apiCliente.get(`/api/carrinhoCompra/${idCarrinho}/itens`);
                                    console.log('Itens do carrinho:', resItens.data);
                                    setItens(resItens.data);

                                    setQuantidade(resItens.data.length);
                                    const subtotalCalc = resItens.data.reduce((acc, item) => acc + (item.PrecoUnitario * item.Quantidade), 0);
                                    setSubtotal(subtotalCalc);
                                } else {
                                    setItens([]);
                                    setQuantidade(0);
                                    setSubtotal(0);
                                }
                                setFrete(15.00);
            } catch (error) {
                console.error("Erro ao buscar carrinho:", error);
            }
        };
        fetchCarrinho();
    }, [currentUser]);

    return (
        <ContainerHome>
            <ContainerCarrinho>
                {itens.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    itens.map(item => (
                        <CardCarrinho
                            key={item.IDItemCarrinho || item.idItemCarrinho}
                            idItemCarrinho={item.IDItemCarrinho || item.idItemCarrinho}
                            idProduto={item.IDProduto || item.idProduto}
                            quantidade={item.Quantidade || item.quantidade}
                            precoUnitario={item.PrecoUnitario || item.precoUnitario}
                            urlImagem={item.URLImagem || item.urlImagem}
                            descricaoProduto={item.DescricaoProduto || item.descricaoProduto}
                        />
                    ))
                )}
            </ContainerCarrinho>
           <ContainerCarrinho2>
                <ContainerMenor>
                    <p>{quantidade} itens no carrinho, deseja adicionar mais?</p>
                    <BVerMaisProdutos />
                </ContainerMenor>
                <ContainerMenor>
                    <p>Subtotal: R${subtotal.toFixed(2)}</p>
                    <p>Frete: R${frete.toFixed(2)}</p>
                    <BProsseguirComACompra />
                </ContainerMenor>
            </ContainerCarrinho2>    
        </ContainerHome>
    );
}

export default CarrinhoCompras;
