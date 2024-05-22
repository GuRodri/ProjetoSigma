import React, { useState } from "react";
import { Campos, Colunas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro, CamposMenores, CamposMenoresSubdivisao2 } from "./style";
import BCadastrar from "../../components/Button/Cadastrar";

function CadastroEndereco() {
    const [dataNascimento, setDataNascimento] = useState(null);

    return (
        <Container>
            <Form>
                <TituloCadastro>Cadastro de Endereço</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <CamposMenores>
                            <CamposMenoresSubdivisao2>
                                <label>CEP</label>
                                <Input type="text" placeholder="Título do Anúncio" />
                            </CamposMenoresSubdivisao2>
                            <Campos>
                                <label>Rua</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </Campos>
                        </CamposMenores>
                            <CamposMenores>
                            <CamposMenoresSubdivisao2>
                                <label>Número</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Bairro</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Cidade</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>UF</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </CamposMenoresSubdivisao2>
                            <CamposMenoresSubdivisao2>
                                <label>Pais</label>
                                <Input type="text" placeholder="Descrição do anuncio" />
                            </CamposMenoresSubdivisao2>
                        </CamposMenores>    
                    </Colunas>
                </ContainerColunas>
                
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroEndereco;
