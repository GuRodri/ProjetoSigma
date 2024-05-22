import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const baseFontSize = 16;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: transparent;
    text-align: center;
    color: #d9d9d9;
    text-decoration: none;
    h3 {
        font-size: 3.125em;
        margin-bottom: 1.875em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    background-color: #101419;
    border-radius: 1.25em;
    border: 0.0625em solid #726F6F;
    padding: 3.125em;
`;

export const Input = styled.input`
    margin-bottom: 0.625em;
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    width: 100%;
    height: 3em;
    text-align: left;
    padding: 0 0.9375em;
`;

export const InputMenor = styled.input`
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    width:100%;
    height: 3em;
    text-align: left;
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.625em;
    text-align: left;
    font-size: 1em;
    width: 79.5%;
`;

export const Colunas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0.625em;
`;

export const ContainerColunas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.625em;
`;

export const Select1 = styled.select`
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    height: 3em;
    width: 100%;
    text-align: left;
    padding: 0 0.9375em;
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    height: 2.5em;
    padding: 0.625em;
    font-size: 1em;
    border: 0.0625em solid #ccc;
    border-radius: 0.3125em;
    background-color: #fff;
    outline: none;
    cursor: pointer;
`;

export const TituloCadastro = styled.h1`
    font-size: 1.56em;
    margin-bottom: 0.625em;
`;
export const CamposMenores = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.625em;
    text-align: left;
    font-size: 1em;
`;

export const CamposMenoresSubdivisao2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    font-size: 1em;
`;
