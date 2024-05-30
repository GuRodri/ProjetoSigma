import React from 'react';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaAnuncios = ({ anuncio }) => {
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
        <button onClick={() => handleDisableAnuncio(anuncio.idAnuncio)}>Excluir</button> <BEditar /> <BDetalhes />
      </ContainerBotao>
    </CardHome2>
  );
};

export default CardListaAnuncios;
