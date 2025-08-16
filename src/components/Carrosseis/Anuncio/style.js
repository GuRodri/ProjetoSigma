import styled from 'styled-components';

export const StyledSliderContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.15),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);

  .slick-dots {
    display: flex !important;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.5rem !important;
  }

  .slick-dots li button:before {
    font-size: 0;
  }

  .slick-dots li.slick-active div {
    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 50px;
    height: 50px;
    
    &:before {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.8);
    }
    
    &:hover:before {
      color: #10b981;
    }
  }

  .slick-prev {
    left: -25px;
  }

  .slick-next {
    right: -25px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem;
    border-radius: 1.25rem;

    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      
      &:before {
        font-size: 20px;
      }
    }

    .slick-prev {
      left: -15px;
    }

    .slick-next {
      right: -15px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 1rem;

    .slick-prev,
    .slick-next {
      width: 35px;
      height: 35px;
      
      &:before {
        font-size: 18px;
      }
    }

    .slick-prev {
      left: -10px;
    }

    .slick-next {
      right: -10px;
    }
  }
`;

export const StyledSliderSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
`;

export const StyledSliderImage = styled.img`
  width: 100%;
  max-height: 18rem;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.05) contrast(1.1);

  &:hover {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(16, 185, 129, 0.3);
    filter: brightness(1.1) contrast(1.15);
  }

  @media (max-width: 768px) {
    max-height: 14rem;
    border-radius: 0.75rem;
  }

  @media (max-width: 480px) {
    max-height: 12rem;
    border-radius: 0.5rem;
  }
`;

export const StyledMessage = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  font-size: 1.1rem;
  padding: 3rem;
  background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 2rem;
  }
`;

export const StyledDotStyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDotStyle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(16, 185, 129, 0.5);
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;
