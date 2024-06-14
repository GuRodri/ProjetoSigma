import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
   `;

export const ContainerEspacamento = styled.div`
  background-color: rgba(16, 20, 25, 0.5);
  border: 1px solid #545454;
  padding: 3em;
  width: 50%;
  height: 40em;
  margin: 4em 0;
  color: #d9d9d9;
  font-size: 13px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  gap: 3em;
`;

export const TituloCadastro = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 2em;
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
justify-content: center;
padding-bottom: 0;
padding-top: 1em;
`;
