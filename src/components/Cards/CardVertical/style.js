import styled from "styled-components";

// Container principal
export const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  list-style: none;
`;

// === Card estilizado ===
export const CardHome2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #e2e8f0;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 220px;
  min-height: 320px;
  text-align: center;
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
      rgba(59, 130, 246, 0.05) 50%,
      transparent 70%
    );
    transform: rotate(45deg) translate(-100px, -100px);
    transition: transform 0.6s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.3),
      0 10px 10px -5px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(59, 130, 246, 0.3);

    &::before {
      transform: rotate(45deg) translate(0px, 0px);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 0.9rem;
    color: #cbd5e1;
    margin: 0.5rem 0;
    line-height: 1.4;
  }

  img {
    width: 100%;
    height: 140px;
    border-radius: 0.75rem;
    object-fit: cover;
    margin: 0.75rem 0;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  span {
    color: #fbbf24;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    min-height: 300px;
    padding: 0.875rem;
  }

  @media (max-width: 480px) {
    max-width: 180px;
    min-height: 280px;
    padding: 0.75rem;
  }
`;

export const NomeProd = styled.span`
  font-size: 15px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;
  margin-bottom: 0.75rem;
  line-height: 1.3;

  h2 {
    color: #f1f5f9;
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
    width: 100%;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    height: 36px;
    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  width: 100%;
  text-align: center;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: none;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px) scale(1.02);
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    height: 2.25rem;
  }
`;
