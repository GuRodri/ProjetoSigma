import styled from "styled-components";

export const StyledDatePickerContainer = styled.div`
  margin: 0.3125em 0 1.875em 0;
  border: 0.0625em solid #ccc;
  border-radius: 5.25em;
  height: 100%;
  width: 100%;
  text-align: left;
  position: relative;
  background-color: transparent;
`;

export const StyledDatePickerInput = styled.input`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0.625em;
  font-size: 1em;
  border-radius: 1.25em;
  outline: none;
  cursor: pointer;
`;

export const StyledDatePickerOptions = styled.div`
  position: absolute;
  top: calc(100% + 0.3125em);
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 0.0625em solid #ccc;
  border-radius: 0.3125em;
  box-shadow: 0px 0.25em 0.5em rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
`;

export const StyledSelect = styled.select`
  flex: 1;
  height: 2.5em;
  width: 100%;
  padding: 0.225em;
  border: none;
  outline: none;
  background-color: transparent;
  text-decoration:none;
`;
