import React, { useState } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, LoginIcon, Container } from './style';
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import LoginIconImage from '../../assets/icons/logar.svg';
import { NavLink } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useSearch } from '../../context/SearchContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setGlobalSearchTerm } = useSearch();

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
        <NavLink to="/login">
          <LoginIcon src={LoginIconImage} alt="Logar" />
        </NavLink>
        <MenuHamburguer />
      </Container>
    </SearchBarContainer>
  );
};

export default Header;
