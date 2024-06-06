import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;
  color: #d9d9d9;
`;

export const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em 5em 2.5em 5em;
  width: auto;
  background-color: #101419;
  border-radius: 20px;
  border: 1px solid #726F6F;
`;

export const Title = styled.h1`
  margin-bottom: 30px;

`;

export const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
`;

export const FileInputContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  align-items: center;
  border-radius: 10px;
`;

export const FileInput = styled.input`
  display: none;
  border-radius: 10px;
`;

export const CustomFileInputButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Thumbnail = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-top: 10px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 1.2em;
`;

export const UploadButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #218838;
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  text-align: center;
  line-height: 20px;
  color: white;
`;

export const ImageLink = styled.a`
  margin-top: 10px;
  display: block;
  color: blue;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;