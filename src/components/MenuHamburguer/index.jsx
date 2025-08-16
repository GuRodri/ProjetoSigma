import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container, MenuIcon, MenuOptions, CloseButton } from './style';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/autContexto1';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const menuRef = useRef(null);

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
    if (isOpen) {
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      document.removeEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOpen]);

  return (
    <Container>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <MenuOptions open={isOpen} ref={menuRef} onMouseLeave={handleMouseLeave}>
        <CloseButton onClick={closeMenu}>
          <FaTimes />
        </CloseButton>
        {currentUser && currentUser.role === 0 && (
          <>
            <NavLink to="/ambiente-usuario" onClick={closeMenu}>Perfil Usuário</NavLink>
            <NavLink to="/favoritos" onClick={closeMenu}>Favoritos</NavLink>
            <NavLink to="/historico-de-compras" onClick={closeMenu}>Histórico de Compras</NavLink>
          </>
        )}
        {currentUser && currentUser.role === 1 && (
          <>
            <NavLink to="/ambiente-administrador" onClick={closeMenu}>Perfil Administrador</NavLink>
            <NavLink to="/ambiente-usuario" onClick={closeMenu}>Perfil Usuário</NavLink>
            <NavLink to="/favoritos" onClick={closeMenu}>Favoritos</NavLink>
            <NavLink to="/historico-de-compras" onClick={closeMenu}>Histórico de Compras</NavLink>
            <NavLink to="/carrinho-compras" onClick={closeMenu}>Carrinho de Compras</NavLink>
          </>
        )}
        <NavLink to="/sobre-nos" onClick={closeMenu}>Sobre Nós</NavLink>
      </MenuOptions>
    </Container>
  );
};

export default HamburgerMenu;
