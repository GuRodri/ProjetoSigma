import React, { useState } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, LoginIcon, Container, UserName, LoggedInMenu, MenuOption } from './style';
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import LoginIconImage from '../../assets/icons/logar.svg';
import Logado from '../../assets/icons/logado.png';
import { NavLink } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useSearch } from '../../context/searchContext';
import { useAuth} from  '../../context/autContexto1';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
  const { setGlobalSearchTerm } = useSearch();
  const { currentUser, logout } = useAuth(); // Obtenha o usuário atual e a função de logout do contexto de autenticação

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setGlobalSearchTerm(searchTerm);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
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
        <NavLink to={`/search?query=${encodeURIComponent(searchTerm)}`} onClick={handleSearch}>
          <SearchIcon src={PesquisarIcon} alt="Pesquisar" />
        </NavLink>
      </SearchInputContainer>
      <Container>
        {currentUser ? ( // Verifica se há um usuário logado
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