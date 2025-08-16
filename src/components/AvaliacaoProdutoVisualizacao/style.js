import styled from "styled-components";

// Container principal com design moderno
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  padding: 1.5rem;
  border-radius: 0.875rem;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(16, 185, 129, 0.15);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(16, 185, 129, 0.1);
  color: #f8fafc;
  transition: all 0.3s ease;
  margin: 0 auto 1.5rem auto;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.25),
      0 0 20px rgba(16, 185, 129, 0.05);
    border-color: rgba(16, 185, 129, 0.2);
  }

  @media (max-width: 1024px) {
    max-width: 95%;
    margin: 0 auto 1.25rem auto;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto 1.25rem auto;
    padding: 1.25rem;
    border-radius: 0.75rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto 1rem auto;
    padding: 1rem;
    border-radius: 0.625rem;
    gap: 1rem;
  }
`;

// Grid de avaliações modernizado
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  gap: 1.5rem;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.75rem;
  gap: 1rem;
  background: rgba(51, 65, 85, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(51, 65, 85, 0.4);
    border-color: rgba(16, 185, 129, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
    gap: 0.75rem;
  }
`;

// Imagem do card com estilo moderno
export const CardImagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 2px solid rgba(16, 185, 129, 0.2);
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(16, 185, 129, 0.4);
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const Centralizar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #cbd5e1;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const AvaliacaoTitulo = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #f8fafc;
  text-align: center;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.025em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    
    &::after {
      width: 60px;
      bottom: -0.625rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.375rem;
    margin-bottom: 1rem;
    
    &::after {
      width: 50px;
      bottom: -0.5rem;
    }
  }
`;

export const BotaoMostrarMais = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border: none;
    padding: 0.875rem 2rem;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }

    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px);
    }
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;
    
    button {
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
    }
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const Centralizar2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;
