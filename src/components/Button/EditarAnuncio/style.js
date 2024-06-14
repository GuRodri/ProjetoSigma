import styled from 'styled-components';

export const Button = styled.button`
  background-color: #F7FC04;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: .675em;

  &:hover {
    background-color: #bfb800;
  }

  &:active {
    transform: scale(1.1);
  }
`;