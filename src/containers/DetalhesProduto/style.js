import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252C37;
  min-height: 100vh;
  padding: 1em;
  width: 80%;
`;

export const ContainerEspacamento = styled.div`
  background-color: rgba(16, 20, 25, 0.1);
  border: 1px solid #545454;
  padding: 3em;
  width: 50%;
  margin: 2em 0;
  color: #d9d9d9;
  font-size: 13px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    padding: 2em;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5em;
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  gap: 3em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;

export const TituloCadastro = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2em;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Campos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
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

  &:hover {
    background-color: #bfb800;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BCentralizar = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;

  @media (max-width: 480px) {
    padding: 0.5em 0;
  }
`;
