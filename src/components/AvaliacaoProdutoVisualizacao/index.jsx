import React, { useState, useEffect } from 'react';
import apiCliente from '../../services/apiCliente';
import StarRating from '../Rating';
import {
  Container,
  Ul,
  Li,
  Centralizar,
  CardImagem,
  BotaoMostrarMais,
  AvaliacaoTitulo,
  Coluna,
  Centralizar2
} from './style';
import BMostrarMais from '../../components/Button/MostarMais/index';

const getNota = (a) => {
  // tenta diferentes chaves comuns
  const n = a?.classificacao ?? a?.nota ?? a?.estrelas ?? a?.rating ?? 0;
  const num = Number(n);
  return Number.isFinite(num) ? num : 0;
};

const getComentario = (a) => {
  return a?.comentario ?? a?.mensagem ?? a?.texto ?? a?.descricao ?? ''; // fallback para não quebrar
};

const getIdAvaliacao = (a, idx) => {
  return a?.idAvaliacao ?? a?.id ?? a?._id ?? `av-${idx}`;
};

const AvaliacaoProdutoVisualizacao = ({ idProduto }) => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [erro, setErro] = useState(null);
  const [mediaAvaliacoes, setMediaAvaliacoes] = useState(null);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        // 1) tenta buscar já filtrado por idProduto
        const url = `/api/Avaliacao?idProduto=${encodeURIComponent(idProduto)}`;
        const response = await apiCliente.get(url);
        let data = Array.isArray(response.data) ? response.data : [];

        // 2) por garantia, filtra também no frontend (caso a API ignore o filtro)
        const somenteDoProduto = data.filter(
          (av) => String(av.idProduto) === String(idProduto)
        );

        setAvaliacoes(somenteDoProduto);

        if (somenteDoProduto.length > 0) {
          const soma = somenteDoProduto.reduce((acc, curr) => acc + getNota(curr), 0);
          const media = soma / somenteDoProduto.length;
          setMediaAvaliacoes(Number.isFinite(media) ? media.toFixed(1) : null);
        } else {
          setMediaAvaliacoes(null);
        }
        setErro(null);
      } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
        if (error?.response?.status === 404) {
          setErro('Nenhuma avaliação encontrada para este produto.');
        } else {
          setErro('Não foi possível carregar as avaliações. Por favor, tente novamente mais tarde.');
        }
        setAvaliacoes([]);
        setMediaAvaliacoes(null);
      }
    };

    if (idProduto !== undefined && idProduto !== null) {
      fetchAvaliacoes();
    }
  }, [idProduto]);

  return (
    <Container>
      <AvaliacaoTitulo>Avaliações com vídeos</AvaliacaoTitulo>

      <Centralizar>
        {erro ? (
          <p>{erro}</p>
        ) : mediaAvaliacoes ? (
          <>
            <p>Média: {mediaAvaliacoes}</p>
            {/* StarRating normalmente espera um número; garantimos conversão */}
            <StarRating value={Number(mediaAvaliacoes)} readOnly />
            <span>({avaliacoes.length})</span>
          </>
        ) : (
          <p>Produto ainda sem avaliação</p>
        )}
      </Centralizar>

      <Centralizar2>
        {avaliacoes.length > 0 && (
          <Ul>
            {avaliacoes.map((avaliacao, idx) => (
              <Li key={getIdAvaliacao(avaliacao, idx)}>
                <Coluna>
                  <p>{getComentario(avaliacao)}</p>
                  <StarRating value={getNota(avaliacao)} readOnly />
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
