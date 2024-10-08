import React, { useState, useEffect } from 'react';
import apiCliente from '../../services/apiCliente';
import StarRating from '../Rating';
import { Container, Ul, Li, Centralizar } from './style';
import BMostrarMais from '../../components/Button/MostarMais/index'

const AvaliacaoProdutoVisualizacao = ({ idProduto }) => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [erro, setErro] = useState(null);
  const [mediaAvaliacoes, setMediaAvaliacoes] = useState(null);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await apiCliente.get(`/api/Avaliacao?idProduto=${idProduto}`);
        const data = response.data;
        setAvaliacoes(data);

        if (data.length > 0) {
          const totalAvaliacoes = data.length;
          const somaClassificacoes = data.reduce((acc, curr) => acc + curr.classificacao, 0);
          const media = somaClassificacoes / totalAvaliacoes;
          setMediaAvaliacoes(media.toFixed(1));
        } else {
          setMediaAvaliacoes(null);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErro('Nenhuma avaliação encontrada para este produto.');
        } else {
          setErro('Não foi possível carregar as avaliações. Por favor, tente novamente mais tarde.');
        }
      }
    };

    if (idProduto) {
      fetchAvaliacoes();
    }
  }, [idProduto]);

  if (erro) {
    return <div>{erro}</div>;
  }

  return (
    <Container>
      <h3>Avaliações do Produto</h3>
      <Centralizar>
        {mediaAvaliacoes ? (
          <>
            <p>Média das avaliações: {mediaAvaliacoes}</p>
            <StarRating value={mediaAvaliacoes} readOnly />
          </>
        ) : (
          <p>Produto ainda sem avaliação</p>
        )}
      </Centralizar>
      {avaliacoes.length > 0 && (
        <Ul>
          {avaliacoes.map(avaliacao => (
            <Li key={avaliacao.idAvaliacao}>
              <p><strong>Comentário:</strong> {avaliacao.comentario}</p>
              <StarRating value={avaliacao.classificacao} readOnly />
            </Li>
          ))}
              <Li>
                  <BMostrarMais />
              </Li>
        </Ul>
      )}
    </Container>
  );
};

export default AvaliacaoProdutoVisualizacao;
