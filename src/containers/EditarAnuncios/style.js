import styled from "styled-components";

export const Container = styled.div`
 display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerEspacamento = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: rgba(16, 20, 25, 0.5);
  border: 1px solid #545454;
  padding: 3em;
  width: 60%;
  height: 43em;
  margin: 4em 0;
  color: #d9d9d9;
  font-size: 13px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:80%;
`;

export const TituloCadastro = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #d9d9d9;
  border-radius: 10px;

  &:focus {
    border-color: #007bff;
  }
`;

export const CamposMenores = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:1em;
`;

export const CamposMenoresSubdivisao2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width:45%;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #F7FC04;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #bfb800;
  }
`;
export const BCentralizar = styled.div`
display: flex;
flex-direction:row-reverse;
justify-content: center;
gap: 2em;
padding-top: 1.5em;
padding-bottom: 0;
`;