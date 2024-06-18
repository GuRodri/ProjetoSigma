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
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
  const { setGlobalSearchTerm } = useSearch();
  const { currentUser, logout } = useAuth(); // Obtenha o usuário atual e a função de logout do contexto de autenticação
  const menuRef = useRef(null); // Ref para o menu
  const navigate = useNavigate();

  // Limpa o termo de pesquisa ao mudar de página
  useEffect(() => {
    setSearchTerm('');
  }, [navigate]); // Monitora mudanças na navegação para limpar o termo de pesquisa

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    setGlobalSearchTerm(searchTerm);
    if (window.location.pathname === '/') {
      navigate('/home-listagem'); // Redireciona para a página de listagem após a busca se estiver na página inicial
    } else {
      // Implemente redirecionamento para outras páginas de listagem aqui
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
