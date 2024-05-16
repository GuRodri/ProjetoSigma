import React, { useState } from "react";
import { Campos, Colunas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro, CamposMenores, CamposMenoresSubdivisao2, } from "./style";
import BCadastrar from "../../components/Button/Cadastrar";

function CadastroAnuncios() {
    const [dataNascimento, setDataNascimento] = useState(null);

    return (
        <Container>
            <Form>
                <TituloCadastro>Cadastro de Anúncios</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <Campos>
                            <label>Título</label>
                            <Input type="text" placeholder="Título do Anúncio" />
                        </Campos>
                        <Campos>
                            <label>Descrição</label>
                            <Input type="text" placeholder="Descrição do anuncio" />
                        </Campos>
                        <CamposMenores>
                            <CamposMenoresSubdivisao2>
                                <label>Preço</label>
                                <Input type="number" placeholder="Digite o Preço" step="0.01" min="0.01" />     
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Quantidade</label>
                                <Input type="number" placeholder="Digite a Quantidade" step="1" min="1" />
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                            <label>Ativo?</label>
                            <Select1 placeholder="Selecione">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </Select1>
                            </CamposMenoresSubdivisao2>
                        </CamposMenores>
                        <Campos>
                            <label>Imagem do Anúncio</label>
                            <Input type="password" placeholder="Senha" />
                        </Campos>
                    </Colunas>
                </ContainerColunas>
                
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroAnuncios;
