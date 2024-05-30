import React, { useEffect, useState } from 'react';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BExcluir from '../../Button/Excluir';
import BEditar from '../../Button/Editar';
import BDetalhes from '../../Button/Detalhes';

const CardListaUsuarios = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiCliente.get('/api/usuario');
        console.log('Dados recebidos do backend:', response.data);
        const activeUsers = response.data.filter(user => user.ativo);
        setUsers(activeUsers);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDisableUser = async (id) => {
    console.log('Clicou no botão de exclusão');
    try {
      await apiCliente.patch(`/api/usuario/${id}/disable`);
      console.log('Usuário desabilitado com sucesso! ID:', id);
      const updatedUsers = users.map(user => {
        if (user.idUsuario === id) {
          return { ...user, ativo: false };
        }
        return user;
      });
      console.log('Lista de usuários atualizada:', updatedUsers);
      setUsers(updatedUsers);
      alert('Usuário desabilitado com sucesso!');
    } catch (error) {
      console.error('Erro ao desabilitar usuário: ', error);
      alert('Erro ao desabilitar usuário. Verifique o console para mais detalhes.');
    }
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.nome} ${user.sobrenome}`.toLowerCase();
    return fullName.includes((searchTerm || '').toLowerCase());
  });

  return (
    <>
      {filteredUsers.map((user) => (
        <CardHome2 key={user.idUsuario}>
          <ContainerEspacamento>
            <ContainerTexto>
              <p>{user.idUsuario}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{`${user.nome} ${user.sobrenome}`}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{user.email}</p>
            </ContainerTexto>
          </ContainerEspacamento>
          <ContainerBotao>
            <button onClick={() => handleDisableUser(user.idUsuario)}>Excluir</button> <BEditar /> <BDetalhes />
          </ContainerBotao>
        </CardHome2>
      ))}
    </>
  );
};

export default CardListaUsuarios;
