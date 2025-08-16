import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  padding: 0.75rem 3rem;
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(16, 185, 129, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.02) 0%, transparent 50%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0.75rem 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 375px) {
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
  height: auto;
  margin: 0;
  padding: 0.5rem 0;
  filter: drop-shadow(0 2px 8px rgba(16, 185, 129, 0.3));
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-1px);
    filter: drop-shadow(0 4px 12px rgba(16, 185, 129, 0.4));
  }

  @media (max-width: 768px) {
    width: 2.75rem;
    padding: 0.375rem 0;
  }

  @media (max-width: 375px) {
    width: 2.25rem;
    padding: 0.25rem 0;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 600px;
  display: flex;
  justify-content: center;
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
    max-width: none;
  }

  @media (max-width: 375px) {
    margin: 0 0.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 3rem 0.875rem 1.25rem;
  border-radius: 2rem;
  border: 2px solid rgba(16, 185, 129, 0.2);
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  color: #f8fafc;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::placeholder {
    color: rgba(203, 213, 225, 0.7);
    font-weight: 400;
  }

  &:focus {
    border-color: rgba(16, 185, 129, 0.5);
    background: rgba(30, 41, 59, 0.6);
    box-shadow: 
      0 6px 25px rgba(0, 0, 0, 0.15),
      0 0 0 3px rgba(16, 185, 129, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: rgba(16, 185, 129, 0.3);
    background: rgba(30, 41, 59, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2.75rem 0.75rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    padding: 0.625rem 2.5rem 0.625rem 0.875rem;
    font-size: 0.875rem;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: brightness(0) invert(1);

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(16, 185, 129, 0.6));
  }

  @media (max-width: 768px) {
    right: 0.875rem;
    width: 1.125rem;
    height: 1.125rem;
  }

  @media (max-width: 375px) {
    right: 0.75rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const LoginIcon = styled.img`
  width: 4.2em;
  cursor: pointer; /* Adiciona um cursor de pointer para indicar que é clicável */

  @media (max-width: 768px) {
    width: 3.9em; /* Reduzir tamanho do ícone em telas menores */
  }
  @media (max-width: 375px) {
    padding-top: .5em;
    width: 3.2em;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 0.5rem;
    padding: 0.375rem 0;
  }
`;

export const UserName = styled.span`
  color: #f8fafc;
  padding: 0.75rem 1rem;
  font-weight: 500;
  display: block;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(16, 185, 129, 0.1);
    color: #34d399;
  }
`;

export const LoggedInMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.75rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(16, 185, 129, 0.1);
  z-index: 1001;
  overflow: hidden;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  min-width: 180px;
  animation: menuSlideIn 0.2s ease;

  @keyframes menuSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 1rem;
    width: 10px;
    height: 10px;
    background: rgba(30, 41, 59, 0.95);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }

  @media (max-width: 375px) {
    right: -1rem;
    min-width: 160px;
    
    &::before {
      right: 1.5rem;
    }
  }
`;

export const MenuOption = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #f8fafc;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s ease;
  border-top: 1px solid rgba(16, 185, 129, 0.1);

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #fca5a5;
  }

  &:active {
    background: rgba(239, 68, 68, 0.2);
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1.75rem;
    height: 1.75rem;
    color: #ffffff;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
    color: #34d399;
    filter: drop-shadow(0 4px 8px rgba(52, 211, 153, 0.4));
  }

  @media (max-width: 768px) {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.625rem;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.3);
  border: 2px solid rgba(203, 213, 225, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: rgba(203, 213, 225, 0.9);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.05) translateY(-2px);
    background: rgba(30, 41, 59, 0.5);
    border-color: rgba(248, 250, 252, 0.4);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(248, 250, 252, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    svg {
      color: #f8fafc;
      filter: drop-shadow(0 4px 8px rgba(248, 250, 252, 0.4));
    }
  }

  &:active {
    transform: scale(1.02) translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    
    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }

  @media (max-width: 375px) {
    padding: 0.375rem;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const UserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.2));
  border: 2px solid rgba(16, 185, 129, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.05) translateY(-2px);
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.3));
    border-color: rgba(16, 185, 129, 0.6);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.15),
      0 0 20px rgba(16, 185, 129, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(1.02) translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    width: 2rem;
    height: 2rem;
    font-size: 0.875rem;
  }
`;
