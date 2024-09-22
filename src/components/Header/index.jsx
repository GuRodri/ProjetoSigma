import React, { useState, useRef, useEffect } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, Container, UserName, LoggedInMenu, MenuOption, UserCircle } from './style';
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useSearch } from '../../context/searchCoxtexto';
import { useAuth } from '../../context/autContexto1';
import { FaUser } from 'react-icons/fa'; // Ícone de login

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { setGlobalSearchTerm } = useSearch();
  const { currentUser, logout } = useAuth();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm('');
  }, [navigate]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    setGlobalSearchTerm(searchTerm);
    if (window.location.pathname === '/') {
      navigate('/home-listagem');
    } else {
      console.log('Implemente redirecionamento para outras páginas de listagem aqui');
    }
  };

  const handleSearch = () => {
    performSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  const handleMouseLeave = (e) => {
    if (!menuRef.current.contains(e.relatedTarget)) {
      setMenuOpen(false);
    }
  };

  return (
    <SearchBarContainer>
      <NavLink to="/">
        <Logo src={LogoImage} alt="Logo" />
      </NavLink>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <a onClick={handleSearch}>
          <SearchIcon src={PesquisarIcon} alt="Pesquisar" />
        </a>
      </SearchInputContainer>
      <Container ref={menuRef} onMouseLeave={handleMouseLeave}>
        {currentUser ? (
          <>
            <UserCircle onClick={toggleMenu}>
              {currentUser.email.charAt(0).toUpperCase()}
            </UserCircle>
            {menuOpen && (
              <LoggedInMenu>
                <NavLink to={currentUser.role === 0 ? '/ambiente-usuario' : '/ambiente-administrador'}>
                  <UserName>{currentUser.email}</UserName>
                </NavLink>
                <MenuOption onClick={handleLogout}>Logout</MenuOption>
              </LoggedInMenu>
            )}
          </>
        ) : (
          <NavLink to="/login">
            <FaUser style={{ width: '1.5em', height: '1.5em', cursor: 'pointer', color: '#d9d9d9', margin: '.2em 1em .5em 1em' }} /> {/* Ícone de login */}
          </NavLink>
        )}
        <MenuHamburguer />
      </Container>
    </SearchBarContainer>
  );
};

export default Header;
