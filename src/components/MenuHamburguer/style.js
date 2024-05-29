import styled from 'styled-components';

export const HamburgerButton = styled.button`
  // Estilos omitidos para brevidade

   div {
    // Estilos omitidos para brevidade
    
    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Overlay = styled.div`
  // Estilos omitidos para brevidade
`;

export const MenuContainer = styled.nav`
  // Estilos omitidos para brevidade
  
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  
  &:hover {
    ${({ $isOpen }) => !$isOpen && 'transform: translateX(100%);'}
  }
`;
