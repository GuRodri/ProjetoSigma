import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 77.8vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TituloCadastro = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Campos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const CamposMenores = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CamposMenoresSubdivisao2 = styled.div`
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`;
