
import React, { useEffect, useState } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await apiCliente.get('/api/Jogo');
        console.log('Dados recebidos do backend:', response.data);
        // Filtrando apenas os jogos ativos
        const jogosAtivos = response.data.filter(jogo => jogo.ativo);
        setJogos(jogosAtivos);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchJogos();
  }, []);

  const handleDisableJogo = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      if (!id) {
        console.error('ID do jogo não está definido:', id);
        return;
      }
      await apiCliente.patch(`/api/Jogo/${id}/disable`);
      console.log('Jogo desabilitado com sucesso! ID:', id);
      const updatedJogos = jogos.filter(jogo => jogo.idJogo !== id);
      console.log('Lista de jogos atualizada:', updatedJogos);
      setJogos(updatedJogos);
      alert('Jogo desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar jogo: ', error);
      alert('Erro ao desabilitar jogo. Verifique o console para mais detalhes.');
    }
  };

  return (
    <>
      {jogos.map((jogo) => (
        <CardHome2 key={jogo.idJogo}>
          <ContainerEspacamento>
            <ContainerTexto>
              <img src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" width='60em'/>
            </ContainerTexto>
            <ContainerTexto>
              <p>{jogo.idJogo}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{jogo.nomeJogo}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{jogo.categoriaJogo}</p>
            </ContainerTexto>
          </ContainerEspacamento>
          <ContainerBotao>
            <button onClick={() => handleDisableJogo(jogo.idJogo)}>Excluir</button> <BEditar /> <BDetalhes />
          </ContainerBotao>
        </CardHome2>
      ))}
    </>
  );
};

export default CardListaJogos;
