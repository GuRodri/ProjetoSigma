import styled from "styled-components"
export const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f172a;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  min-width: 140px;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 3px 8px rgba(16, 185, 129, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.1);
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
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    box-shadow: 
      0 6px 15px rgba(16, 185, 129, 0.4),
      0 3px 8px rgba(0, 0, 0, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 
      0 3px 8px rgba(16, 185, 129, 0.3),
      0 1px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 120px;
    height: 2.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    min-width: 110px;
    height: 2rem;
    font-size: 0.85rem;
  }
`;