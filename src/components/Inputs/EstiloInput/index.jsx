import React, { useState } from "react";
import {
  StyledDatePickerContainer,
  StyledDatePickerInput,
  StyledDatePickerOptions,
  StyledSelect
} from "./style";

function StyledDatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleInputChange = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    // setIsOpen(false); // Remova isso para que o componente permaneça aberto enquanto estiver interagindo com ele
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") setDay(value);
    if (name === "month") setMonth(value);
    if (name === "year") setYear(value);
  };

  return (
    <StyledDatePickerContainer onBlur={handleBlur}>
      <StyledDatePickerInput
        type="text"
        placeholder="Data de Nascimento"
        onClick={handleInputChange}
        value={` ${day} / ${month} / ${year}`}
        readOnly
      />
      {isOpen && (
        <StyledDatePickerOptions>
          <StyledSelect name="day" onChange={handleSelectChange} value={day}>
            <option value="">Dia</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect name="month" onChange={handleSelectChange} value={month}>
            <option value="">Mês</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect name="year" onChange={handleSelectChange} value={year}>
            <option value="">Ano</option>
            {Array.from({ length: 104 }, (_, i) => (
              <option key={i + 1920} value={i + 1920}>
                {i + 1920}
              </option>
            ))}
          </StyledSelect>
        </StyledDatePickerOptions>
      )}
    </StyledDatePickerContainer>
  );
}

export default StyledDatePicker;
