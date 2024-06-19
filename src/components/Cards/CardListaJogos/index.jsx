import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../../services/apiCliente';
import BEditarJogo from '../../Button/EditarJogo';

const CardListaJogos = ({ jogo }) => {
  const navigate = useNavigate();

  const handleDisableJogo = async (id) => {
    try {
      await apiCliente.patch(`/api/Jogo/${id}/disable`);
      alert('Jogo desabilitado com sucesso!');
    } catch (error) {
      alert('Erro ao desabilitar jogo. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => {
    navigate(`/detalhes-jogos/${id}`);
  };

  return (
    <CardHome2 key={jogo.idJogo}>
      <ContainerEspacamento>
        <ContainerTexto>
          <img src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" width='70em' style={{ borderRadius: '5px' }} />
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
        <button className='BExcluir' onClick={() => handleDisableJogo(jogo.idJogo)}>Excluir</button>
        <BEditarJogo id={jogo.idJogo} />
        <button className='BDetalhes' onClick={() => handleDetalhes(jogo.idJogo)}>Detalhes</button>
      </ContainerBotao>
    </CardHome2>
  );
};

export default CardListaJogos;
