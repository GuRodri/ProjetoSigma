import React, { useState } from "react";
import { Campos, Colunas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro } from "./style";
import BCadastrar from "../../components/Button/Cadastrar";

function CadastroJogos() {
    const [dataNascimento, setDataNascimento] = useState(null);

    return (
        <Container>
            <Form>
                <TituloCadastro>Cadastro de Jogos</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <Campos>
                            <label>Nome do Jogo</label>
                            <Input type="text" placeholder="Nome do Jogo" />
                        </Campos>
                        <Campos>
                            <label>Categoria</label>
                            <Input type="Text" placeholder="Categoria" />
                        </Campos>
                        <Campos>
                            <label>Processador Requerido</label>
                            <Input type="text" placeholder="Processador requerido" />
                        </Campos>
                        <Campos>
                            <label>Memória Ram Requerida</label>
                            <Input type="text" placeholder="Memória Ram requerida" />
                        </Campos>
                   
                    </Colunas>
                    <Colunas>
                    <Campos>
                            <label>Placa de Video Requerida</label>
                            <Input type="text" placeholder="Placa de video requerida" />
                        </Campos>
                        <Campos>
                            <label>Espaço em Disco requerido</label>
                            <Input type="text" placeholder="Espaço em disco requerido" />
                        </Campos>
                        <Campos>
                            <label>Imagem do Jogo</label>
                            <Input type="url" placeholder="Imagem do Jogo" />
                        </Campos>
                        <Campos>
                            <label>Ativo</label>
                            <Select1>
                                <option value="selecione">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </Select1>
                        </Campos>
                    </Colunas>
                </ContainerColunas>
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroJogos;
