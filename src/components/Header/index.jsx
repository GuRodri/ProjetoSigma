import React, { useState, useRef, useEffect } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, LoginIcon, Container, UserName, LoggedInMenu, MenuOption } from './style';
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import LoginIconImage from '../../assets/icons/logar.svg';
import Logado from '../../assets/icons/logado.png';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useSearch } from '../../context/searchCoxtexto';
import { useAuth } from '../../context/autContexto1';

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

  const handleInputChange = event => {
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

  const handleKeyPress = event => {
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
            <LoginIcon src={Logado} alt="Logado" onClick={toggleMenu} />
            {menuOpen && (
              <LoggedInMenu>
                {currentUser.role === 0 ? (
                  <NavLink to='/ambiente-usuario'><UserName>{currentUser.email}</UserName></NavLink>
                ) : (
                  <NavLink to='/ambiente-administrador'><UserName>{currentUser.email}</UserName></NavLink>
                )}
                <MenuOption onClick={handleLogout}>Logout</MenuOption>
              </LoggedInMenu>
            )}
          </>
        ) : (
          <NavLink to="/login">
            <LoginIcon src={LoginIconImage} alt="Logar" />
          </NavLink>
        )}
        <MenuHamburguer />
      </Container>
    </SearchBarContainer>
  );
};

export default Header;