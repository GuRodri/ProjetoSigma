import styled from "styled-components";

export const ContainerSetup = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
  border-radius: 1.5rem;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(16, 185, 129, 0.05) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    transition: transform 0.6s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(16, 185, 129, 0.3);

    &::before {
      transform: rotate(45deg) translate(20px, 20px);
    }
  }

  h1 {
    color: #ffffff;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    line-height: 1.2;
    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h1 {
      font-size: 1.6rem;
      margin-bottom: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    h1 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ContainerSuperior = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ContainerTexto = styled.div`
  flex: 1;
  text-align: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;

  @media (max-width: 768px) {
    min-width: 150px;
  }
`;

export const ContainerImagem = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    max-width: 700px;
    max-height: 14rem;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.3),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(1.1) contrast(1.1);
  }

  img:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(16, 185, 129, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 1.25rem;
    img {
      max-height: 12rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
    img {
      max-height: 10rem;
    }
  }
`;
