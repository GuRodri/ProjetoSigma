// src/components/style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;
`;

export const FileInput = styled.input`
  margin-right: 10px;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: #45a049;
  }
`;

export const Progress = styled.progress`
  width: 100%;
  margin: 10px 0;
`;

export const ImageLink = styled.a`
  color: #1a0dab;
  margin-top: 10px;
`;

export const SuccessMessage = styled.div`
  margin-top: 20px;
  color: #4CAF50;
  font-weight: bold;
`;
