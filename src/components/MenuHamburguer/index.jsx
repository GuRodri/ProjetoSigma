import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa'; // Ícone de menu hambúrguer do react-icons
import { Container, MenuIcon, MenuOptions, UserName } from './style'; // Importe UserName do seu estilo
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/autContexto1';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth(); // Obtenha o usuário atual do contexto de autenticação
  const menuRef = useRef(null); // Ref para o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMouseLeave = () => {
    closeMenu();
  };

  useEffect(() => {
    // Adicionando event listener para capturar quando o componente é desmontado para limpar os event listeners
    const cleanup = () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };

    // Adicionando event listener para o menu
    if (isOpen) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return cleanup;
  }, [isOpen]);

  return (
    <Container>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <MenuOptions open={isOpen} ref={menuRef} onMouseLeave={handleMouseLeave}>
        {currentUser && currentUser.role === 0 && ( // Verifica se o usuário está logado e se é um usuário comum
          <>
            <NavLink to="/ambiente-usuario" onClick={closeMenu}>Perfil Usuário</NavLink>
            <NavLink to="/favoritos" onClick={closeMenu}>Favoritos</NavLink>
            <NavLink to="/historico-de-compras" onClick={closeMenu}>Histórico de Compras</NavLink>
          </>
        )}
        {currentUser && currentUser.role === 1 && ( // Verifica se o usuário está logado e se é um administrador
          <>
            <NavLink to="/ambiente-administrador" onClick={closeMenu}>Perfil Administrador</NavLink>
          </>
        )}
        <NavLink to="/sobre-nos" onClick={closeMenu}>Sobre Nós</NavLink>
      </MenuOptions>
    </Container>
  );
};

export default HamburgerMenu;
