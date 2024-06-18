import React, { useState, useEffect } from 'react';
import { ContainerCarrinho, Container, ListagemJogos, ContainerTitulo, ContainerEspacamento3} from './style';
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
        console.log('Dados recebidos do backend:', response.data);
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
        <ContainerCarrinho>
          <ContainerTitulo>
            <h2>Selecione o seu jogo</h2>
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
          <a>Não tem meu jogo</a>
        </ContainerCarrinho>
        <ContainerCarrinho>
          <ContainerTitulo>
            <h2>Jogos Adicionados</h2>
          </ContainerTitulo>
          <ListagemJogos>
            <CardCabecalhoSelecaoJogo />
            {addedJogos.map((jogo, index) => (
              <CardSelecaoJogo
                key={index}
                jogo={jogo}
                onRemove={handleRemoveJogo}
                isAdded={true}
              />
            ))}
          </ListagemJogos>
        </ContainerCarrinho>
        <NavLink to={'/setupGamer-page4'}>
          <BContinuar />
        </NavLink> 
       </ContainerEspacamento3>
    </Container>
  );
};

export default SetupGamerPage3;
