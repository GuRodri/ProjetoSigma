import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCliente from '../../../services/apiCliente';
import { CardHome2, ContainerEspacamento, ContainerBotao, ContainerTexto } from './style';
import BEditarUsuario from '../../Button/EditarUsuario';

const CardListaUsuarios = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiCliente.get('/api/usuario');
        const activeUsers = response.data.filter(user => user.ativo);
        setUsers(activeUsers);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDisableUser = async (id) => {
    try {
      await apiCliente.patch(`/api/usuario/${id}/disable`);
      const updatedUsers = users.map(user => {
        if (user.idUsuario === id) {
          return { ...user, ativo: false };
        }
        return user;
      });
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

  const handleDetalhes = (id) => {
    navigate(`/detalhes-usuarios/${id}`);
  };

  return (
    <>
      {filteredUsers.map((user) => (
        <CardHome2 key={user.idUsuario}>
          <ContainerEspacamento>
            <ContainerTexto>
              <p style={{ width: '1em' }}>{user.idUsuario}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{`${user.nome} ${user.sobrenome}`}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{user.email}</p>
            </ContainerTexto>
            <ContainerTexto>
              <p>{user.genero}</p>
            </ContainerTexto>
          </ContainerEspacamento>
          <ContainerBotao>
            <button className='BExcluir' onClick={() => handleDisableUser(user.idUsuario)}>Excluir</button>
            <BEditarUsuario id={user.idUsuario} />
            <button className='BDetalhes' onClick={() => handleDetalhes(user.idUsuario)}>Detalhes</button>
          </ContainerBotao>
        </CardHome2>
      ))}
    </>
  );
};

export default CardListaUsuarios;
