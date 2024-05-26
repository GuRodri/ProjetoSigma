import React, { useEffect, useState } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await apiCliente.get('/api/Anuncio');
        console.log('Dados recebidos do backend:', response.data);
        // Filtrando apenas os anúncios ativos
        const anunciosAtivos = response.data.filter(anuncio => anuncio.ativo);
        setAnuncios(anunciosAtivos);
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
      }
    };

    fetchAnuncios();
  }, []);

  const handleDisableAnuncio = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      if (!id) {
        console.error('ID do anúncio não está definido:', id);
        return;
      }
      await apiCliente.patch(`/api/Anuncio/${id}/disable`);
      console.log('Anúncio desabilitado com sucesso! ID:', id);
      const updatedAnuncios = anuncios.filter(anuncio => anuncio.idAnuncio !== id);
      console.log('Lista de anúncios atualizada:', updatedAnuncios);
      setAnuncios(updatedAnuncios);
      alert('Anúncio desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar anúncio: ', error);
      alert('Erro ao desabilitar anúncio. Verifique o console para mais detalhes.');
    }
  };

  return (
    <>
      {anuncios.map((anuncio) => (
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
      ))}
    </>
  );
};

export default CardListaAnuncios;
