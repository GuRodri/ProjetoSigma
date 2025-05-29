import React, { useState, useRef, useEffect } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, Container, UserName, LoggedInMenu, MenuOption, UserCircle } from './style';
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useSearch } from '../../context/searchCoxtexto';
import { useAuth } from '../../context/autContexto1';
import { FaUser } from 'react-icons/fa';

// Função de sanitização para remover caracteres perigosos
const sanitizeSearchTerm = (term) => {
  return term.replace(/[<>"/'&;]/g, ""); // Remove <, >, ", ', &, ;
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { setGlobalSearchTerm } = useSearch();
  const { currentUser, logout } = useAuth();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(''); // Limpa o termo de busca ao mudar de página
  }, [navigate]);

  // Manipulador de mudança no campo de entrada, aplicando sanitização
  const handleInputChange = (event) => {
    const sanitizedTerm = sanitizeSearchTerm(event.target.value); // Sanitiza enquanto digita
    setSearchTerm(sanitizedTerm);
  };

  const performSearch = () => {
    const sanitizedSearchTerm = sanitizeSearchTerm(searchTerm); // Sanitiza o termo de pesquisa
    setGlobalSearchTerm(sanitizedSearchTerm);
    
    // Evita redirecionamento desnecessário
    if (window.location.pathname !== '/home-listagem') {
      navigate('/home-listagem');
    }
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Previne comportamento padrão do link
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
          onChange={handleInputChange} // Chama a função com sanitização ao digitar
          onKeyPress={handleKeyPress}
        />
        <a onClick={handleSearch} aria-label="Pesquisar">
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
                  <UserName>{currentUser.email.split('@')[0]}</UserName>
                </NavLink>
                <MenuOption onClick={handleLogout}>sair</MenuOption>
              </LoggedInMenu>
            )}
          </>
        ) : (
          <NavLink to="/login">
            <FaUser style={{ width: '1.5em', height: '1.5em', cursor: 'pointer', color: '#d9d9d9', margin: '.2em 1em .5em 1em' }} />
          </NavLink>
        )}
        <MenuHamburguer />
      </Container>
    </SearchBarContainer>
  );
};

export default Header;
