import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #d9d9d9;

  @media (max-width: 768px) {
    font-size: 24px;
}

  @media (max-width: 375px) {
    font-size: 20px;
    padding-top: .3em
}
`;

/*export const MenuOptions = styled.div`
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
`;*/

export const MenuOptions = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  /*background-color: #101419; *//* Fundo semitransparente */
  backdrop-filter: blur(10px); /* Desfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidade com navegadores WebKit */
  box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 1);
  z-index: 1;
  width: 250px;
  height: 100vh;
  border-radius: 0 0 0 0.5em;
  border-bottom: 1px solid #141500;
  padding-top: 40px;
  font-size: .875em;

  a {
    color: #d9d9d9;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3); /* Ajuste de hover com transparência */
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
