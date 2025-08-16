import styled from "styled-components";

export const ContainerSetupsMaisVendidos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.1),
      transparent
    );
    transition: left 1s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(59, 130, 246, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 1rem;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    letter-spacing: -0.02em;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      
      &::after {
        width: 50px;
        height: 2px;
      }
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      
      &::after {
        width: 40px;
      }
    }
  }
`;

export const ContainerSetups = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  .slick-dots {
    margin-top: 1.5rem !important;
    
    li button:before {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4);
    }
    
    li.slick-active button:before {
      color: #3b82f6;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 50px;
    height: 50px;
    
    &:before {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    &:hover:before {
      color: #3b82f6;
    }
  }

  .slick-prev {
    left: -30px;
  }

  .slick-next {
    right: -30px;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    
    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      
      &:before {
        font-size: 20px;
      }
    }
    
    .slick-prev {
      left: -20px;
    }
    
    .slick-next {
      right: -20px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    
    .slick-prev,
    .slick-next {
      width: 35px;
      height: 35px;
      
      &:before {
        font-size: 18px;
      }
    }
    
    .slick-prev {
      left: -15px;
    }
    
    .slick-next {
      right: -15px;
    }
  }
`;

export const StyledSliderSlide = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.75rem;

  &:hover {
    transform: translateY(-4px) scale(1.02);
  }
`;
