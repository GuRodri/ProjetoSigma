import React, { useState } from "react";
import {
  Campos,
  Colunas,
  Container,
  ContainerColunas,
  Form,
  Input,
  TituloCadastro,
} from "./style";
import BCadastrar from "../../components/Button/Cadastrar";
import apiCliente from "../../services/apiCliente";
import { useNavigate } from "react-router-dom";

function CadastroJogos() {
  const [nomeJogo, setNomeJogo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [processadorRequerido, setProcessadorRequerido] = useState("");
  const [memoriaRamRequerida, setMemoriaRamRequerida] = useState("");
  const [placaVideoRequerida, setPlacaVideoRequerida] = useState("");
  const [espacoDiscoRequerido, setEspacoDiscoRequerido] = useState("");
  const [imagemJogo, setImagemJogo] = useState("https://www.example.com/image.jpg");
  const [ativo, setAtivo] = useState(true);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();

    console.log({
      nomeJogo,
      categoria,
      processadorRequerido,
      memoriaRamRequerida,
      placaVideoRequerida,
      espacoDiscoRequerido,
      ativo,
      data: currentDate,
      imagemJogo,
    });
    try {
      // Envia os dados do jogo para o backend usando a instância apiCliente
      await apiCliente.post("/api/jogo", {
        nomeJogo,
        categoria,
        processadorRequerido,
        memoriaRamRequerida,
        placaVideoRequerida,
        espacoDiscoRequerido,
        ativo,
        data: currentDate,
        imagemJogo,
      });

      alert("Jogo cadastrado com sucesso!");
      navigate("/lista-jogos");
    } catch (error) {
      console.error("Erro ao cadastrar jogo: ", error);
      alert(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <TituloCadastro>Cadastro de Jogos</TituloCadastro>
        <ContainerColunas>
          <Colunas>
            <Campos>
              <label>Nome do Jogo</label>
              <Input
                type="text"
                placeholder="Nome do Jogo"
                value={nomeJogo}
                onChange={(e) => setNomeJogo(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Categoria</label>
              <Input
                type="text"
                placeholder="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Processador Requerido</label>
              <Input
                type="text"
                placeholder="Processador requerido"
                value={processadorRequerido}
                onChange={(e) => setProcessadorRequerido(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Memória Ram Requerida</label>
              <Input
                type="text"
                placeholder="Memória Ram requerida"
                value={memoriaRamRequerida}
                onChange={(e) => setMemoriaRamRequerida(e.target.value)}
                required
              />
            </Campos>
          </Colunas>
          <Colunas>
            <Campos>
              <label>Placa de Vídeo Requerida</label>
              <Input
                type="text"
                placeholder="Placa de vídeo requerida"
                value={placaVideoRequerida}
                onChange={(e) => setPlacaVideoRequerida(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Espaço em Disco Requerido</label>
              <Input
                type="text"
                placeholder="Espaço em disco requerido"
                value={espacoDiscoRequerido}
                onChange={(e) => setEspacoDiscoRequerido(e.target.value)}
                required
              />
            </Campos>
            <Campos>
              <label>Imagem do Jogo</label>
              <Input
                type="url"
                placeholder="Imagem do Jogo"
                value={imagemJogo}
                onChange={(e) => setImagemJogo(e.target.value)}
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

export default CadastroJogos;
