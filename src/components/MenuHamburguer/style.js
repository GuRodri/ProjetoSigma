import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #d9d9d9;
`;

export const MenuOptions = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: -45px;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  Navilink {
    color: d9d9d9;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
    }
  }
`;
export const UserName = styled.span`
  color: #d9d9d9;
`;
