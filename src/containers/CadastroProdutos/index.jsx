import React, { useState } from "react";
import {
  Campos,
  CamposMenores,
  CamposMenoresSubdivisao,
  Colunas,
  Container,
  ContainerColunas,
  Form,
  Input,
  TituloCadastro,
  Textarea,
  InputMenor,
} from "./style";
import BCadastrar from "../../components/Button/Cadastrar";
import apiCliente from "../../services/apiCliente";
import { useNavigate } from "react-router-dom";

// Função de sanitização para limpar entradas de texto
const sanitizeInput = (input) => {
  return input.replace(/[<>"'&;]/g, ""); // Remove <, >, ", ', &, ;
};

function CadastroProdutos() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [imagemProduto, setImagemProduto] = useState("https://www.example.com/image.jpg");
  const [fichaTecnica, setFichaTecnica] = useState("");
  const [ativo, setAtivo] = useState(true);
  const [preco, setPreco] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();

    // Sanitizando todas as entradas antes de enviar para o backend
    const sanitizedNomeProduto = sanitizeInput(nomeProduto);
    const sanitizedDescricaoProduto = sanitizeInput(descricaoProduto);
    const sanitizedCategoria = sanitizeInput(categoria);
    const sanitizedMarca = sanitizeInput(marca);
    const sanitizedImagemProduto = sanitizeInput(imagemProduto);
    const sanitizedFichaTecnica = sanitizeInput(fichaTecnica);
    const sanitizedPreco = sanitizeInput(preco);
    const sanitizedQuantidadeEstoque = sanitizeInput(quantidadeEstoque);

    console.log({
      nomeProduto: sanitizedNomeProduto,
      descricaoProduto: sanitizedDescricaoProduto,
      categoria: sanitizedCategoria,
      marca: sanitizedMarca,
      imagemProduto: sanitizedImagemProduto,
      fichaTecnica: sanitizedFichaTecnica,
      ativo,
      preco: sanitizedPreco,
      quantidadeEstoque: sanitizedQuantidadeEstoque,
      data: currentDate,
    });

    try {
      // Envia os dados do produto para o backend usando a instância apiCliente
      await apiCliente.post("/api/produto", {
        nomeProduto: sanitizedNomeProduto,
        descricaoProduto: sanitizedDescricaoProduto,
        categoria: sanitizedCategoria,
        marca: sanitizedMarca,
        imagemProduto: sanitizedImagemProduto,
        fichaTecnica: sanitizedFichaTecnica,
        ativo,
        preco: sanitizedPreco,
        quantidadeEstoque: sanitizedQuantidadeEstoque,
        data: currentDate,
      });

      alert("Produto cadastrado com sucesso!");
      navigate("/lista-produtos");
    } catch (error) {
      console.error("Erro ao cadastrar produto: ", error);
      alert(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <TituloCadastro>Cadastro de Produtos</TituloCadastro>
        <ContainerColunas>
          <Colunas>
            <Campos>
              <label>Nome do Produto</label>
              <Input
                type="text"
                placeholder="Nome do Produto"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Descrição</label>
              <Input
                type="text"
                placeholder="Descrição"
                value={descricaoProduto}
                onChange={(e) => setDescricaoProduto(e.target.value)}
                required
              />
            </Campos>
            <CamposMenores>
              <CamposMenoresSubdivisao>
                <label>Categoria</label>
                <InputMenor
                  type="text"
                  placeholder="Categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  required
                />
              </CamposMenoresSubdivisao>
              <CamposMenoresSubdivisao>
                <label>Marca</label>
                <InputMenor
                  type="text"
                  placeholder="Marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  required
                />
              </CamposMenoresSubdivisao>
            </CamposMenores>
          </Colunas>
          <Colunas>
            <Campos>
              <label>Imagem do Produto</label>
              <Input
                type="url"
                placeholder="Imagem do Produto"
                value={imagemProduto}
                onChange={(e) => setImagemProduto(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Ficha Técnica</label>
              <Textarea
                placeholder="Ficha Técnica"
                value={fichaTecnica}
                onChange={(e) => setFichaTecnica(e.target.value)}
                required
              />
            </Campos>
            <CamposMenores>
              <CamposMenoresSubdivisao>
                <label>Preço</label>
                <InputMenor
                  type="number"
                  placeholder="Preço"
                  step="0.01"
                  min="0.01"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required
                />
              </CamposMenoresSubdivisao>
              <CamposMenoresSubdivisao>
                <label>Estoque</label>
                <InputMenor
                  type="number"
                  placeholder="Estoque"
                  value={quantidadeEstoque}
                  onChange={(e) => setQuantidadeEstoque(e.target.value)}
                  required
                />
              </CamposMenoresSubdivisao>
            </CamposMenores>
          </Colunas>
        </ContainerColunas>
        <BCadastrar />
      </Form>
    </Container>
  );
}

export default CadastroProdutos;