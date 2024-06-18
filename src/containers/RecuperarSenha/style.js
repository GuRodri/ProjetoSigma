import styled from 'styled-components';
import { Form as AntdForm, Input as AntdInput, Button as AntdButton } from 'antd';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
  min-height:77.8vh;
`;

export const Form = styled(AntdForm)`
    margin-top: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    background-color: #f0f2f5;
    padding: 3em;
`;

export const Input = styled(AntdInput)`
  height: 40px;
`;

export const Button = styled(AntdButton)`
  width: 100%;
`;

export const ForgotPasswordLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
`;
