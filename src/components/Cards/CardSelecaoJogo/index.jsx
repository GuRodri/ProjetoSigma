import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto, BAdicionar1, BRemover } from './style';

const CardSelecaoJogo = ({ jogo, onAdd, onRemove, isAdded }) => {
  return (
    <CardHome2 key={jogo.idJogo}>
      <ContainerEspacamento>
        <ContainerTexto>
          <img src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" width='30em' border-radius='5px' />
        </ContainerTexto>
        <ContainerTexto>
          <p>{jogo.nomeJogo}</p>
        </ContainerTexto>
      </ContainerEspacamento>
      <ContainerBotao>
        {isAdded ? (
          <BRemover onClick={() => onRemove(jogo)}>Remover</BRemover>
        ) : (
          <BAdicionar1 onClick={() => onAdd(jogo)}>Adicionar</BAdicionar1>
        )}
      </ContainerBotao>
    </CardHome2>
  );
};

export default CardSelecaoJogo;
