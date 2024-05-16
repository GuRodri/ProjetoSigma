import React, { useState } from "react";
import { StyledDatePicker } from "./style"; 
import { Campos, CamposMenores, CamposMenoresSubdivisao, Colunas, Container, ContainerColunas, Form, Input, Select1, TituloCadastro } from "./style";
import BCadastrar from "../../components/Button/Cadastrar";
import EstiloInputData from "../../components/Inputs/EstiloInput";

function CadastroUsuarios() {
    const [dataNascimento, setDataNascimento] = useState(null);

    return (
        <Container>
            <Form>
                <TituloCadastro>Cadastro Usuários</TituloCadastro>
                <ContainerColunas>
                    <Colunas>
                        <Campos>
                            <label>Nome</label>
                            <Input type="text" placeholder="Nome" />
                        </Campos>
                        <Campos>
                            <label>Email</label>
                            <Input type="password" placeholder="Senha" />
                        </Campos>
                        <Campos>
                            <label>Senha</label>
                            <Input type="password" placeholder="Senha" />
                        </Campos>
                    </Colunas>
                    <Colunas>
                        <Campos>
                            <label>Sobrenome</label>
                            <Input type="text" placeholder="Sobrenome" />
                        </Campos>
                        <CamposMenores>
                            <CamposMenoresSubdivisao>
                                <label>Gênero</label>
                                <Select1>
                                    <option value="selecione">Selecione</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </Select1>
                            </CamposMenoresSubdivisao>
                            <CamposMenoresSubdivisao>
                                <label>DataNascimento</label>
                                <EstiloInputData />
                            </CamposMenoresSubdivisao>
                        </CamposMenores>
                        <Campos>
                            <label>Telefone</label>
                            <Input type="tel" placeholder="Telefone" />
                        </Campos>
                    </Colunas>
                </ContainerColunas>
                <BCadastrar />
            </Form>
        </Container>
    );
}

export default CadastroUsuarios;
