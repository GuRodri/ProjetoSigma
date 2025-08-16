import React, { useState, useEffect } from 'react';
import { Container, ListagemJogos, ContainerBotao, ContainerTitulo, ContainerEspacamento3, LinkCustom } from './style';
import apiCliente from '../../../services/apiCliente';
import CardSelecaoJogo from '../../../components/Cards/CardSelecaoJogo';
import { useSearch } from '../../../context/searchCoxtexto';
import CardCabecalhoSelecaoJogo from '../../../components/Cards/CardCabecalhoSelecaoJogo';
import { NavLink } from 'react-router-dom';
import BContinuar from '../../../components/Button/Continuar';

const SetupGamerPage3 = () => {
  const [jogos, setJogos] = useState([]);
  const [filteredJogos, setFilteredJogos] = useState([]);
  const [addedJogos, setAddedJogos] = useState([]);
  const { globalSearchTerm, setGlobalSearchTerm } = useSearch(); // Obtendo o termo de pesquisa global do contexto

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await apiCliente.get('/api/Jogo');
        const jogosAtivos = response.data.filter(jogo => jogo.ativo);
        setJogos(jogosAtivos);
        setFilteredJogos(jogosAtivos);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };
    fetchJogos();
  }, []);

  useEffect(() => {
    if (!globalSearchTerm) {
      setFilteredJogos(jogos);
      return;
    }
    const filtered = jogos.filter(jogo =>
      jogo.nomeJogo.toLowerCase().includes(globalSearchTerm.toLowerCase())
    );
    setFilteredJogos(filtered);
  }, [globalSearchTerm, jogos]);

  useEffect(() => {
    // Limpa o termo de busca global ao montar a página SetupGamerPage3
    setGlobalSearchTerm('');
  }, [setGlobalSearchTerm]);

  const handleAddJogo = (jogo) => {
    setAddedJogos([...addedJogos, jogo]);
  };

  const handleRemoveJogo = (jogo) => {
    setAddedJogos(addedJogos.filter(j => j.idJogo !== jogo.idJogo));
  };

  return (
    <Container>
      <ContainerEspacamento3>
        <ContainerTitulo>
          <h2>Selecione seus jogos favoritos</h2>
        </ContainerTitulo>
        <ListagemJogos className="listagemJogos">
          <CardCabecalhoSelecaoJogo />
          {filteredJogos.map((jogo) => (
            <CardSelecaoJogo
              key={jogo.idJogo}
              jogo={jogo}
              onAdd={handleAddJogo}
              onRemove={handleRemoveJogo}
              isAdded={addedJogos.some(j => j.idJogo === jogo.idJogo)}
            />
          ))}
        </ListagemJogos>
        <LinkCustom href="#">Não encontrou seu jogo? Clique aqui</LinkCustom>
      </ContainerEspacamento3>
      <ContainerBotao>
        <NavLink to={'/setupGamer-page4'}>
          <BContinuar />
        </NavLink>
      </ContainerBotao>
    </Container>
  );
};

export default SetupGamerPage3;
