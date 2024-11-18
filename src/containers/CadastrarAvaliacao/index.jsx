import React, { useState } from 'react';
import apiCliente from '../../services/apiCliente';
import StarRating from '../../components/Rating';
import { FormContainer, RatingContainer, ContainerEspacamento } from './style'; // Importando os estilos

// Função de sanitização para remover caracteres perigosos
const sanitizeInput = (input) => {
  return input.replace(/[<>"/'&;]/g, ""); // Remove <, >, ", ', &, ;
};

const CadastroAvaliacao = () => {
  const [avaliacao, setAvaliacao] = useState({
    idProduto: '',
    idUsuario: '',
    comentario: '',
    classificacao: 0,
    dataAvaliacao: new Date().toISOString(),
    ativo: true
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Sanitiza o valor antes de atualizar o estado
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

    const dataAtualizada = {
      ...avaliacao,
      dataAvaliacao: new Date().toISOString()
    };

    try {
      const response = await apiCliente.post(`/api/Avaliacao`, dataAtualizada);
      console.log('Avaliação enviada:', response.data);
      // Limpar formulário após o envio da avaliação
      setAvaliacao({
        idProduto: '',
        idUsuario: '',
        comentario: '',
        classificacao: 0,
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
              type="text"
              name="idProduto"
              value={avaliacao.idProduto}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>ID do Usuário:</label>
            <input
              type="text"
              name="idUsuario"
              value={avaliacao.idUsuario}
              onChange={handleChange}
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
              <StarRating value={avaliacao.classificacao} onChange={handleRatingChange} />
            </RatingContainer>
          </div>
          <button type="submit">Enviar Avaliação</button>
        </form>
      </FormContainer>
    </ContainerEspacamento>
  );
};

export default CadastroAvaliacao;
