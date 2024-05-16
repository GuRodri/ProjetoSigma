import React, { useState } from 'react';
import { SearchBarContainer, Logo, SearchInputContainer, SearchInput, SearchIcon, LoginIcon } from './style'; // Importando os estilos do componente
import PesquisarIcon from '../../assets/icons/search-normal.svg';
import LogoImage from '../../assets/icons/logo.svg';
import LoginIconImage from '../../assets/icons/logar.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
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
        <NavLink to="/home-listagem">
          <SearchIcon src={PesquisarIcon} alt="Pesquisar" />
        </NavLink>
      </SearchInputContainer>
      <NavLink to="/login">
        <LoginIcon src={LoginIconImage} alt="Logar" />
      </NavLink>
    </SearchBarContainer>
  );
};

export default Header;
