import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3em;
  height: auto;
`;

export const Coluna = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 1em;
  color: #d9d9d9;
  gap: 1em;
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  color: #d9d9d9;
  gap: 3em;
`;

export const Campo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 5em;
  border: ${(props) => (props.selected ? "2px solid blue" : "none")};
  border-radius: 5px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => (props.selected ? "rgba(14, 15, 16, 0.8)" : "transparent")};
  background-image: ${(props) => (props.style ? props.style.backgroundImage : "none")};

  &:hover {
    opacity: 0.8;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #d9d9d9;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
