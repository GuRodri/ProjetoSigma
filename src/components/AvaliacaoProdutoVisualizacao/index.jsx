import React, { useState, useEffect } from 'react';
import apiCliente from '../../services/apiCliente';
import StarRating from '../Rating';
import { Container, Ul, Li, Centralizar, CardImagem, BotaoMostrarMais, AvaliacaoTitulo, Coluna, Centralizar2 } from './style';
import BMostrarMais from '../../components/Button/MostarMais/index';

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
      <AvaliacaoTitulo>Avaliações com vídeos</AvaliacaoTitulo>
      <Centralizar>
        {mediaAvaliacoes ? (
          <>
            <p>Média: {mediaAvaliacoes}</p>
            <StarRating value={mediaAvaliacoes} readOnly />
            <span>(100)</span> {/* Simulação de quantidade de avaliações */}
          </>
        ) : (
          <p>Produto ainda sem avaliação</p>
        )}
      </Centralizar>
      <Centralizar2>
        {avaliacoes.length > 0 && (
          <Ul>
            {avaliacoes.map((avaliacao) => (
              <Li key={avaliacao.idAvaliacao}>
                <CardImagem src="https://via.placeholder.com/100" alt="Imagem do produto" />
                <Coluna>
                  <p>{avaliacao.comentario}</p>
                  <StarRating value={avaliacao.classificacao} readOnly />
                </Coluna>
              </Li>
            ))}
          </Ul>
        )}
        <BotaoMostrarMais>
          <BMostrarMais />
        </BotaoMostrarMais>
      </Centralizar2>
    </Container>
  );
};

export default AvaliacaoProdutoVisualizacao;
