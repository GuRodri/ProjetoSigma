import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  color: #d9d9d9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction:row;
  align-items: center;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 20px;
  width: 20em;
  height: 30em;
  padding: 1em;
  border-radius: 8px;
  background-color: rgba(14, 15, 16, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph1 = styled.p`
  font-size: 14px;
  width:30em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1em;
`;

export const StrongText = styled.span`
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerEstilo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  margin-top: 20px;
  gap: 2em;
`;

export const IconWrapper = styled.span`
  margin-right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 8em;
`;