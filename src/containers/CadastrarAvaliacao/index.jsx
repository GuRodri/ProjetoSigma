import React, { useState } from 'react';
import apiCliente from '../../services/apiCliente';
import StarRating from '../../components/Rating';
import { FormContainer, RatingContainer, ContainerEspacamento } from './style';

// Função de sanitização para remover apenas caracteres perigosos básicos
const sanitizeInput = (input) => {
  return input.replace(/[<>"]/g, ""); // remove <, >, "
};

const CadastroAvaliacao = () => {
  const [avaliacao, setAvaliacao] = useState({
    idProduto: '',
    idUsuario: '',
    comentario: '',
    classificacao: 1, // não iniciar com 0
    dataAvaliacao: new Date().toISOString(),
    ativo: true
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = sanitizeInput(value);

    setAvaliacao(prevState => ({
      ...prevState,
      [name]: sanitizedValue
    }));
  };

  const handleRatingChange = (value) => {
    setAvaliacao(prevState => ({
      ...prevState,
      classificacao: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Converte IDs para números antes de enviar
    const dataAtualizada = {
      ...avaliacao,
      idProduto: Number(avaliacao.idProduto),
      idUsuario: Number(avaliacao.idUsuario),
      dataAvaliacao: new Date().toISOString()
    };

    try {
      const response = await apiCliente.post(`/api/Avaliacao`, dataAtualizada);
      console.log('Avaliação enviada:', response.data);

      // Limpar formulário após envio
      setAvaliacao({
        idProduto: '',
        idUsuario: '',
        comentario: '',
        classificacao: 1,
        dataAvaliacao: new Date().toISOString(),
        ativo: true
      });

      alert('Avaliação enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao enviar avaliação. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <ContainerEspacamento>
      <FormContainer>
        <h3>Avaliar Produto</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID do Produto:</label>
            <input
              type="number"
              name="idProduto"
              value={avaliacao.idProduto}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div>
            <label>ID do Usuário:</label>
            <input
              type="number"
              name="idUsuario"
              value={avaliacao.idUsuario}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div>
            <label>Comentário:</label>
            <textarea
              name="comentario"
              value={avaliacao.comentario}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <div>
            <label>Classificação:</label>
            <RatingContainer>
              <StarRating
                value={avaliacao.classificacao}
                onRate={handleRatingChange}
              />
            </RatingContainer>
          </div>
          <button type="submit">Enviar Avaliação</button>
        </form>
      </FormContainer>
    </ContainerEspacamento>
  );
};

export default CadastroAvaliacao;
