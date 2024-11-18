import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 77.8vh;
    background-color: transparent;
    text-align: center;
    color: #d9d9d9;
    text-decoration: none;
    padding: 3em;

    h3 {
        font-size: 40px;
        margin-bottom: 15px;
    }

    @media (max-width: 768px) {
        padding: 1.5em;
        h3 {
            font-size: 32px;
        }
    }

    @media (max-width: 480px) {
        padding: 1em;
        h3 {
            font-size: 28px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: #101419;
    border-radius: 20px;
    border: 1px solid #726F6F;
    padding: 40px;

    label {
        font-size: 14px;
        padding-left: 2px;
    }

    @media (max-width: 768px) {
        padding: 30px;
    }

    @media (max-width: 480px) {
        padding: 20px;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0 45px 0 15px; /* Adicione espaço para o ícone */
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 1.25em;
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: 30px;
    }

    @media (max-width: 480px) {
        height: 28px;
    }
`;

export const EyeIconButton = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #888;
    display: flex;
    align-items: center;

    &:hover {
        color: #555;
    }
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 16px;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const Texto = styled.div`
    text-align: left;
    width: 100%;
    padding-bottom: 40px;

    p {
        font-size: 12px;
        margin-bottom: 4px;
        color: #d9d9d9;
    }

    span {
        font-size: 12px;
        color: #3BA4D1;
    }

    @media (max-width: 768px) {
        p, span {
            font-size: 11px;
        }
    }

    @media (max-width: 480px) {
        p, span {
            font-size: 10px;
        }
    }
`;
