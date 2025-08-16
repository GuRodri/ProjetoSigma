import React from 'react';
import { CardHome2, ImagemAnuncio } from './style';
import apiCliente from '../../../services/apiCliente';
import { useNavigate } from 'react-router-dom';
import { Trash2, Info, Edit2 } from 'lucide-react';

const CardListaAnuncios = ({ anuncio }) => {
  const navigate = useNavigate();

  const handleDisableAnuncio = async (id) => {
    try {
      await apiCliente.patch(`/api/Anuncio/${id}/disable`);
      alert('Anúncio desabilitado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao desabilitar anúncio. Verifique o console para mais detalhes.');
    }
  };

  const handleDetalhes = (id) => navigate(`/detalhes-anuncios/${id}`);
  const handleEditar = (id) => navigate(`/editar-anuncios/${id}`);

  return (
    <CardHome2>
      <ImagemAnuncio src={anuncio.referenciaImagem} alt="Imagem do Anúncio" />
      <p>{anuncio.titulo}</p>
      <Trash2 color="#FF4D4F" size={20} onClick={() => handleDisableAnuncio(anuncio.idAnuncio)} />
      <Edit2 color="#FFA500" size={20} onClick={() => handleEditar(anuncio.idAnuncio)} />
      <Info color="#25D62C" size={20} onClick={() => handleDetalhes(anuncio.idAnuncio)} />
    </CardHome2>
  );
};

export default CardListaAnuncios;
