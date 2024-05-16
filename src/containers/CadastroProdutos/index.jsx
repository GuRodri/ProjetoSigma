import React, { useState } from "react";
import {
 Campos, CamposMenores, CamposMenoresSubdivisao, Colunas,
  Container, ContainerColunas, Form, Input, TituloCadastro,
   Select1, InputMaior , InputMenor, StyledDatePicker,
   CamposMenoresSubdivisao2
} from "./style";
import BCadastrar from "../../components/Button/Cadastrar";
import EstiloInputData from "../../components/Inputs/EstiloInput";

function CadastroProdutos() {

    return (
        <Container>
            <Form>
                <TituloCadastro>Cadastro Produtos</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <Campos>
                            <label>Nome do Produto</label>
                            <Input type="text" placeholder="Nome" />
                        </Campos>
                        <Campos>
                            <label>Descrição</label>
                            <InputMaior type="Text" placeholder="Descrição"  />
                        </Campos>
                     
                        <CamposMenores>
                            <CamposMenoresSubdivisao>
                                <label>Categoria</label>
                                <InputMenor type="text" placeholder="Categoria" />
                            </CamposMenoresSubdivisao>
                            <CamposMenoresSubdivisao>
                                <label>Marca</label>
                                <InputMenor type="text" placeholder="Marca" />
                            </CamposMenoresSubdivisao>
                        </CamposMenores>               
                    </Colunas>
                    <Colunas>
                    <Campos>
                            <label>Imagem do Produto</label>
                            <Input type="url" placeholder="Imagem do Produto" />
                        </Campos>
                        <Campos>
                            <label>Ficha Técnica</label>
                            <InputMaior type="Text" placeholder="Ficha tecnica" />
                        </Campos>
                        <CamposMenores>
                            <CamposMenoresSubdivisao2>
                                <label>Ativo</label>
                                <Select1 id="opcao" name="opcao">
                                    <option value="selecione">Selecione</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </Select1>
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Preço:</label>
                                <InputMenor type="number" id="preco" placeholder="Preço" step="0.01" min="0.01" /> 
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Estoque</label>
                                <InputMenor type="number" placeholder="Quantidade em estoque" />
                            </CamposMenoresSubdivisao2>
                        </CamposMenores>
                       </Colunas>
                </ContainerColunas>
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroProdutos;
