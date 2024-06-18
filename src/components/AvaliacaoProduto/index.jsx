// AvaliacaoProduto.jsx
import React, { useState } from 'react';
import apiCliente from '../../services/apiCliente';

const AvaliacaoProduto = ({ idProduto }) => {
  const [avaliacao, setAvaliacao] = useState({
    idProduto: idProduto,
    idUsuario: 0, // Pode ser o ID do usuário logado ou um campo opcional para identificação
    comentario: '',
    classificacao: 0 // Nota dada pelo usuário (de 1 a 5, por exemplo)
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAvaliacao(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiCliente.post(`/api/Avaliacao/${idProduto}`, avaliacao);
      console.log('Avaliação enviada:', response.data);
      // Limpar formulário após o envio da avaliação
      setAvaliacao({
        idProduto: idProduto,
        idUsuario: 0,
        comentario: '',
        classificacao: 0
      });
      alert('Avaliação enviada com sucesso!');
      // Aqui pode ser adicionada lógica para atualizar a lista de avaliações na página do produto, se necessário
      // Pode ser feito através de um callback passado como propriedade para este componente
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao enviar avaliação. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h3>Avaliar Produto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comentário:</label>
          <textarea name="comentario" value={avaliacao.comentario} onChange={handleChange} rows="4" required></textarea>
        </div>
        <div>
          <label>Classificação:</label>
          <input type="number" name="classificacao" value={avaliacao.classificacao} onChange={handleChange} min="1" max="5" required />
        </div>
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
};

export default AvaliacaoProduto;
