import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import apiCliente from '../../../services/apiCliente';
import { useNavigate } from 'react-router-dom';
import BEditarAnuncios from '../../Button/EditarAnuncio';

const CardListaAnuncios = ({ anuncio }) => {
  const navigate = useNavigate();
  
  const handleDisableAnuncio = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/Anuncio/${id}/disable`);
      console.log('Anúncio desabilitado com sucesso! ID:', id);
      // Remover o anúncio da lista após desabilitá-lo
      setFilteredAnuncios(filteredAnuncios.filter(anuncio => anuncio.idAnuncio !== id));
      alert('Anúncio desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar anúncio: ', error);
      alert('Erro ao desabilitar anúncio. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => {
    navigate(`/detalhes-anuncios/${id}`);
  };

  return (
    <CardHome2 key={anuncio.idAnuncio}>
      <ContainerEspacamento>
        <ContainerTexto>
          <img src={anuncio.referenciaImagem} alt="Imagem do Anúncio" width='60em'/>
        </ContainerTexto>
        <ContainerTexto>
          <p>{anuncio.idAnuncio}</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>{anuncio.titulo}</p>
        </ContainerTexto>
        <ContainerTexto>
          <p>{anuncio.preco}</p>
        </ContainerTexto>
      </ContainerEspacamento>
      <ContainerBotao>
        <button className='BExcluir' onClick={() => handleDisableAnuncio(anuncio.idAnuncio)}>Excluir</button> 
        <BEditarAnuncios id={anuncio.idAnuncio} />
        <button className='BDetalhes' onClick={() => handleDetalhes(anuncio.idAnuncio)}>Detalhes</button>
      </ContainerBotao>
    </CardHome2>
  );
};

export default CardListaAnuncios;
