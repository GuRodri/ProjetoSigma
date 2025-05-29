import styled from 'styled-components';

export const StyledSliderContainer = styled.div`
  width: 88%;
  margin: 1em auto;
  border-radius: 1rem;
  padding: 1.5em;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);

  .slick-dots {
    display: flex !important;
    justify-content: center;
    gap: 0.5em;
  }

  .slick-dots li button:before {
    font-size: 0;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1em;
  }

  @media (max-width: 480px) {
    padding: 0.75em;
  }
`;

export const StyledSliderSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const StyledSliderImage = styled.img`
  width: 100%;
  max-height: 20em;
  border-radius: 0.75rem;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.015);
  }

  @media (max-width: 768px) {
    max-height: 16em;
  }

  @media (max-width: 480px) {
    max-height: 12em;
  }
`;

export const StyledMessage = styled.p`
  text-align: center;
  color: #aaa;
  font-style: italic;
  font-size: 1em;
`;

export const StyledDotStyle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.3s ease;

  .slick-active & {
    background: #00ffcc;
  }
`;
