import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Ícone de menu hambúrguer do react-icons
import { Container, MenuIcon, MenuOptions, UserName } from './style'; // Importe UserName do seu estilo
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/autContexto1';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth(); // Obtenha o usuário atual do contexto de autenticação

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
    console.log('currentUser:', currentUser); // Adicionando um log para verificar o currentUser
  }, [currentUser]);

  
  return (
    <Container>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <MenuOptions open={isOpen}>
        {currentUser && currentUser.role === 0 && ( // Verifica se o usuário está logado e se é um usuário comum
          <>
            <NavLink to="/ambiente-usuario">Perfil Usuário</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
            <NavLink to="/historico-de-compras">Histórico de Compras</NavLink>
          </>
        )}
        {currentUser && currentUser.role === 1 && ( // Verifica se o usuário está logado e se é um administrador
          <>
            <NavLink to="/ambiente-administrador">Perfil Administrador</NavLink>
          </>
        )}
        <NavLink to="/sobre-nos">Sobre Nós</NavLink>
      </MenuOptions>
    </Container>
  );
};

export default HamburgerMenu;
