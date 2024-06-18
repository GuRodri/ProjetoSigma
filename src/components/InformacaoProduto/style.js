import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
    padding: 20px;
    border: 1px solid #726F6F;
    border-radius: 10px;
    height: 24.5em;
    background-color: #252C37;
    color: #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ProductButtonsContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  margin-top: 10px;
  width:100%;
  gap:2em;
  font-size: 14px;
`;

export const ProductDescription = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;  