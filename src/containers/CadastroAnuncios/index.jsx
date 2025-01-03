import React, { useState } from "react";
import {
  Campos,
  Colunas,
  Container,
  ContainerColunas,
  Form,
  Input,
  TituloCadastro,
  CamposMenores,
  CamposMenoresSubdivisao2,
} from "./style";
import BCadastrar from "../../components/Button/Cadastrar";
import apiCliente from "../../services/apiCliente";
import { useNavigate } from "react-router-dom";

// Função de sanitização para remover caracteres perigosos
const sanitizeInput = (input) => {
  return input.replace(/[<>"'&;]/g, ""); // Remove <, >, ", ', &, ;
};

function CadastroAnuncios() {
  const [idProduto, setIDProduto] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [referenciaImagem, setReferenciaImagem] = useState("https://www.example.com/image.jpg");
  const [ativo, setAtivo] = useState(true); // Defina o estado para ativo como true

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();

    console.log({
      idProduto,
      titulo,
      descricao,
      preco,
      ativo,
      data: currentDate,
      referenciaImagem,
    });

    try {
      // Envia os dados do anúncio para o backend usando a instância apiCliente
      await apiCliente.post("/api/anuncio", {
        idProduto,
        titulo,
        descricao,
        preco,
        ativo,
        data: currentDate,
        referenciaImagem,
      });

      alert("Anúncio cadastrado com sucesso!");
      navigate("/lista-anuncios");
    } catch (error) {
      console.error("Erro ao cadastrar anúncio: ", error);
      alert(error.message);
    }
  };

  // Função handleChange que sanitiza as entradas
  const handleInputChange = (setState) => (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setState(sanitizedValue);
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <TituloCadastro>Cadastro de Anúncios</TituloCadastro>
        <ContainerColunas>
          <Colunas>
            <Campos>
              <label>Título</label>
              <Input
                type="text"
                placeholder="Título do Anúncio"
                value={titulo}
                onChange={handleInputChange(setTitulo)}
                required
              />
            </Campos>
            <Campos>
              <label>Descrição</label>
              <Input
                type="text"
                placeholder="Descrição do anúncio"
                value={descricao}
                onChange={handleInputChange(setDescricao)}
                required
              />
            </Campos>
            <CamposMenores>
              <CamposMenoresSubdivisao2>
                <label>Preço</label>
                <Input
                  type="number"
                  placeholder="Digite o Preço"
                  step="0.01"
                  min="0.01"
                  value={preco}
                  onChange={handleInputChange(setPreco)}
                  required
                />
              </CamposMenoresSubdivisao2>
              <CamposMenoresSubdivisao2>
                <label>Id Produto</label>
                <Input
                  type="number"
                  placeholder="Digite o Id do Produto"
                  value={idProduto}
                  onChange={handleInputChange(setIDProduto)}
                  required
                />
              </CamposMenoresSubdivisao2>
            </CamposMenores>
            <Campos>
              <label>Imagem do Anúncio</label>
              <Input
                type="url"
                placeholder="URL da imagem"
                value={referenciaImagem}
                onChange={handleInputChange(setReferenciaImagem)}
                required
              />
            </Campos>
          </Colunas>
        </ContainerColunas>

        <BCadastrar />
      </Form>
    </Container>
  );
}

export default CadastroAnuncios;