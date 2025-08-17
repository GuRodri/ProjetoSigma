export const ValidationMessage = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ff6ec7;
    background: rgba(44,46,74,0.18);
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    margin: 6px 0 0 0;
    padding: 8px 16px;
    box-shadow: 0 2px 8px rgba(44,46,74,0.10);
    letter-spacing: 0.3px;
    width: 100%;
    justify-content: flex-start;
    transition: background 0.2s, color 0.2s;

    svg {
        min-width: 20px;
        min-height: 20px;
        color: #ff6ec7;
        flex-shrink: 0;
    }

    @media (max-width: 480px) {
        font-size: 0.92rem;
        padding: 7px 10px;
        border-radius: 8px;
        svg {
            min-width: 18px;
            min-height: 18px;
        }
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(120deg, #181A2A 0%, #2C2E4A 60%, #1B1F2F 100%);
    text-align: center;
    color: #e0e0e0;
    text-decoration: none;
    padding: 3em;

    h3 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: 700;
        color: #c2e9fb;
        letter-spacing: 1px;
        text-shadow: 0 2px 8px #2C2E4A;
    }

    @media (max-width: 1024px) {
        padding: 2em;
        h3 {
            font-size: 2.1rem;
        }
    }

    @media (max-width: 768px) {
        padding: 1em;
        h3 {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.5em;
        h3 {
            font-size: 1.2rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background: linear-gradient(120deg, #23243a 0%, #2C2E4A 100%);
    border-radius: 24px;
    border: 1.5px solid #3a3d5c;
    box-shadow: 0 8px 32px rgba(44,46,74,0.18), 0 1.5px 8px rgba(0,0,0,0.10);
    padding: 48px 40px 36px 40px;
    transition: box-shadow 0.3s;

    label {
        font-size: 15px;
        padding-left: 2px;
        color: #7fd8f7;
        font-weight: 500;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
    }

    @media (max-width: 1024px) {
        max-width: 380px;
        padding: 36px 24px 24px 24px;
    }

    @media (max-width: 768px) {
        max-width: 95vw;
        padding: 18px 8px 12px 8px;
    }

    @media (max-width: 480px) {
        max-width: 99vw;
        padding: 8px 2px 8px 2px;
        border-radius: 12px;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin-bottom: 28px;

    @media (max-width: 768px) {
        max-width: 95vw;
    }

    @media (max-width: 480px) {
        max-width: 99vw;
        margin-bottom: 18px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0 45px 0 15px;
    height: 42px;
    border: 1.5px solid #7fd8f7;
    border-radius: 1.5em;
    background: #23243a;
    color: #e0e0e0;
    font-size: 1rem;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 1px 4px rgba(44,46,74,0.10);

    &:focus {
        border-color: #c2e9fb;
        box-shadow: 0 0 0 2px #7fd8f733;
    }

    &::placeholder {
        color: #a3a3b5;
        opacity: 1;
        font-size: 0.98rem;
    }

    @media (max-width: 768px) {
        height: 36px;
        font-size: 0.98rem;
        padding: 0 38px 0 10px;
    }

    @media (max-width: 480px) {
        height: 28px;
        font-size: 0.92rem;
        padding: 0 30px 0 8px;
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
    color: #7fd8f7;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
        color: #c2e9fb;
    }
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 16px;

    label {
        align-self: flex-start;
        margin-left: 8px;
        color: #7fd8f7;
    }

    input {
        margin-top: 4px;
        margin-bottom: 0;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const Texto = styled.div`
    text-align: left;
    width: 100%;
    padding-bottom: 32px;

    p {
        font-size: 13px;
        margin-bottom: 4px;
        color: #e0e0e0;
        letter-spacing: 0.2px;
    }

    span {
        font-size: 13px;
        color: #7fd8f7;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
            color: #c2e9fb;
            text-decoration: underline;
        }
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
