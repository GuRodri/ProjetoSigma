import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 78.8vh;
    background-color: transparent;
    text-align: center;
    color: #d9d9d9;
    text-decoration: none;
    padding: 3em;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    background-color: #101419;
    border-radius: 1.25em;
    border: 0.0625em solid #726F6F;
    padding: 3.125em;
    font-size: 12px;
`;

export const Input = styled.input`
    margin-bottom: 0.625em;
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    width: 100%;
    height: 2.5em;
    text-align: left;
    padding: 0 0.9375em;
`;

export const InputMenor = styled.input`
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    width:100%;
    height: 2.5em;
    text-align: left;
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0.5em;
    text-align: left;
    width: 100%;
`;

export const Campos1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5em;
    text-align: left;
    width: 100%;
`;

export const CamposMenores = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5em;
    text-align: left;
`;

export const CamposMenoresSubdivisao = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

export const Linhas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0.625em;
    gap:1em;
`;
export const Linhas2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
`;
export const ContainerColunas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.625em;
`;

export const Select1 = styled.select`
    margin: 0.3125em 0 1.875em 0;
    border: 0.0625em solid #ccc;
    border-radius: 1.25em;
    height: 2.5em;
    width: 100%;
    text-align: left;
    padding: 0 0.9375em;
`;

/*export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    height: 2.5em;
    padding: 0.625em;
    font-size: 1em;
    border: 0.0625em solid #ccc;
    border-radius: 0.3125em;
    background-color: #fff;
    outline: none;
    cursor: pointer;
`;*/

export const TituloCadastro = styled.h1`
    font-size: 1.56em;
    margin-bottom: 0.625em;
`;

export const P1 = styled.p`
    font-size: 12px;
    margin-bottom: 2em;
    width: 40em;
`;
