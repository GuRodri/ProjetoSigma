/*import styled from 'styled-components';

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
  border-radius: 0.5em;
  width:200px;
  height:77.8vh;
  border-bottom: 1px solid #141516;

  

  a {
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
`;*/
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
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 300px;
  height: 100vh;
  border-radius: 0 0 0 0.5em;
  border-bottom: 1px solid #141516;
  padding-top: 40px;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: black;
`;

export const UserName = styled.span`
  color: #d9d9d9;
`;
