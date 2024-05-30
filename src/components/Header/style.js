import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #101419;
  padding: 0 3em;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 3.5em;
  margin: 0;

  @media (max-width: 375px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  flex-grow: 0.40;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101419;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 1em;
  border: 1px solid #ccc;
  margin: auto;
  background-color: #d9d9d9;
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

  @media (max-width: 375px) {
    margin-left: 0;
  }
`;
