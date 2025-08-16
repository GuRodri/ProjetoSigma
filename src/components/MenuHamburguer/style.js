import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  color: #f8fafc;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 1.25rem;
    padding: 0.25rem;
  }
`;

export const MenuOptions = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(16, 185, 129, 0.2);
  z-index: 1001;
  width: 280px;
  height: 100vh;
  border-radius: 0 0 0 1rem;
  padding: 4rem 0 2rem 0;
  font-size: 0.95rem;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  a {
    color: #f8fafc;
    padding: 1rem 1.5rem;
    text-decoration: none;
    display: block;
    font-weight: 500;
    border-bottom: 1px solid rgba(16, 185, 129, 0.1);
    transition: all 0.3s ease;
    position: relative;
    animation: ${fadeIn} 0.4s ease;

    &:hover {
      background: linear-gradient(90deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05));
      color: #10b981;
      transform: translateX(0.5rem);
      border-left: 3px solid #10b981;
    }

    &:active {
      background: rgba(16, 185, 129, 0.2);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    width: 260px;
    font-size: 0.9rem;
    
    a {
      padding: 0.875rem 1.25rem;
    }
  }

  @media (max-width: 375px) {
    width: 240px;
    font-size: 0.875rem;
    
    a {
      padding: 0.75rem 1rem;
    }
  }
`;


export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #f8fafc;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1002;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.5);
    color: #fca5a5;
    transform: scale(1.1) rotate(90deg);
  }

  &:active {
    transform: scale(0.95) rotate(90deg);
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 1.125rem;
    padding: 0.25rem;
  }
`;


export const UserName = styled.span`
  color: #f8fafc;
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;
