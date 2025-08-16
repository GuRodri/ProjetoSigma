import styled from 'styled-components';

export const CardHome2 = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: #1a1d23;
  border-radius: 12px;
  padding: 1em;
  margin-bottom: 1em;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  p{
  vertical-align: middle;}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImagemAnuncio = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
