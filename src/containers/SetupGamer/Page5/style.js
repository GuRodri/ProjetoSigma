import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h2{
    padding-top:2em;
    color: #d9d9d9;
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  min-width: 20%;
  justify-content: center;
  margin: 0 auto;
  padding: 2em 3em;
  margin: 2em;
  background-color: #141516;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #d9d9d9;
  font-size: 12px;
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Campo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-color: #d9d9d9;
    width: 20em;
    color: #000;

  &:hover {
    border-color: #007bff;
  }
  label {
    margin: 0;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 20em;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  width: 20em;

  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
    color: #000;
  }
`;
