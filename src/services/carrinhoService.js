import apiCliente from './apiCliente';

// Adiciona um item ao carrinho do usuário
export const adicionarItemCarrinho = async ({ idUsuario, idProduto, quantidade }) => {
  return apiCliente.post('/carrinho/adicionar', {
    idUsuario,
    idProduto,
    quantidade,
  });
};

// Busca o carrinho do usuário
export const buscarCarrinhoUsuario = async (idUsuario) => {
  return apiCliente.get(`/carrinho/${idUsuario}`);
};

// Busca os itens do carrinho
export const buscarItensCarrinho = async (idCarrinho) => {
  return apiCliente.get(`/carrinho/${idCarrinho}/itens`);
};

// Remove um item do carrinho
export const removerItemCarrinho = async (idItemCarrinho) => {
  return apiCliente.delete(`/carrinho/item/${idItemCarrinho}`);
};

// Atualiza a quantidade de um item no carrinho
export const atualizarQuantidadeItem = async (idItemCarrinho, quantidade) => {
  return apiCliente.put(`/carrinho/item/${idItemCarrinho}`, { quantidade });
};
