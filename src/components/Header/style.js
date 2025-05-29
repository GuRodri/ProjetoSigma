import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #101419;
  padding: 0 3em;
  border-bottom: .25px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) { /* Tablet */
    flex-direction: row;
    padding: 0 1.5em;
    gap: 1em;

  @media (max-width: 375px) { /* Mobile */
    align-items: center;
    padding: 0 .8em;
  }
`;

export const Logo = styled.img`
  width: 3.5em;
  margin: 0;
  padding-top: .5em;

    @media (max-width: 768px) {
    width: 2.5em; /* Reduzir tamanho do ícone em telas menores */
    padding-top: .3em
  }

  @media (max-width: 375px) {
    margin-right: 0;
    width: 1.8em;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  flex-grow: 0.40;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%; /* Para ocupar a largura total em telas menores */
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 1em;
  border: 1px solid #ccc;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    padding: 0.5rem; /* Aumentar o padding em telas menores */
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  @media (max-width: 375px) {
    right: 5px;
  }
`;

export const LoginIcon = styled.img`
  width: 4.2em;
  cursor: pointer; /* Adiciona um cursor de pointer para indicar que é clicável */

  @media (max-width: 768px) {
    width: 3.9em; /* Reduzir tamanho do ícone em telas menores */
  }
  @media (max-width: 375px) {
    padding-top: .5em;
    width: 3.2em;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #101419;
  position: relative;
  padding-top: .5em;

  @media (max-width: 768px) {
    
  }

  @media (max-width: 375px) {
    flex-direction: row;
    padding-top: 0;
  }
`;

export const UserName = styled.span`
  color: black;
  padding: 0.5em;
`;

export const LoggedInMenu = styled.div`
  position: absolute;
  top: 40px; /* Ajuste a posição conforme necessário */
  right: 0;
  background-color:rgb(199, 203, 200);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
  padding-top: .5em;
  font-size: .875em;

  @media (max-width: 375px) {
    width: 100%; /* Para ocupar a largura total no mobile */
    right: auto; /* Remove a posição direita */
  }
`;

export const MenuOption = styled.div`
  margin: .5em;
  cursor: pointer;
  color: #101419;
  text-align: center;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const UserCircle = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: .6em;
    height: .6em;
    border-radius: 50%;
    font-size: 1.1em;
    cursor: pointer;
    margin: .2em 1em .5em 1em;
    padding: .7em;
    border: 3px solid rgb(18, 223, 31);

  @media (max-width: 768px) {
    font-size: .875em;
  }

  @media (max-width: 375px) {
    font-size: 1em;
  }
`;
