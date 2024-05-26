import React, { useState } from 'react';
import { HamburgerButton, MenuContainer, Overlay} from './style';
import { NavLink } from 'react-router-dom';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <>
      <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <MenuContainer isOpen={isOpen} onMouseLeave={closeMenu}>
       <NavLink to="/ambiente-usuario">Perfil Usuário</NavLink>
       <NavLink to="/ambiente-administrador">Perfil Administrador</NavLink>
       <NavLink to="/">Favoritos</NavLink>
       <NavLink to="/favoritos">Histórico de Compras</NavLink>
       <NavLink to="/sobre-nos">Sobre Nós</NavLink>
      </MenuContainer>
    </>
  );
};

export default MenuHamburger;
