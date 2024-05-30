import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaJogos = ({ jogo }) => {
  const handleDisableJogo = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/Jogo/${id}/disable`);
      console.log('Jogo desabilitado com sucesso! ID:', id);
      // Remover o jogo da lista após desabilitá-lo
      setFilteredJogos(filteredJogos.filter(jogo => jogo.idJogo !== id));
      alert('Jogo desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar jogo: ', error);
      alert('Erro ao desabilitar jogo. Verifique o console para mais detalhes.');
    }
  };

  return (
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
  );
};

export default CardListaJogos;
