import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../../services/apiCliente'; // Importe o serviço de API
import BEditarJogo from '../../Button/EditarJogo';

const CardListaJogos = ({ jogo }) => {
  const navigate = useNavigate();
  
  const handleDisableJogo = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/Jogo/${id}/disable`);
      console.log('Jogo desabilitado com sucesso! ID:', id);
      // Remover o jogo da lista após desabilitá-lo - AQUI ESTÁ FALTANDO O ESTADO 'setFilteredJogos'
      alert('Jogo desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar jogo: ', error);
      alert('Erro ao desabilitar jogo. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => {
    navigate(`/detalhes-jogos/${id}`); // Ajuste o caminho para detalhes de jogos
  };

  return (
    <CardHome2 key={jogo.idJogo}>
      <ContainerEspacamento>
        <ContainerTexto>
          <img src={jogo.referenciaImagemJogo} alt="Imagem do Jogo" width='70em' border-radius='5px'/>
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
