import styled from 'styled-components';

export const ContainerEspacamento = styled.div`
  margin-top: 20px;
  min-height:77.8vh;
`;

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;

      label {
        font-weight: bold;
        margin-bottom: 8px;
        display: block;
      }

      textarea {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
      }
    }

    button {
      padding: 12px 24px;
      font-size: 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    font-weight: bold;
    margin-right: 10px;
  }
`;
