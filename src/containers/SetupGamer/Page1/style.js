import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 50%);
        z-index: 0;
    }

    h1 {
        text-align: center;
        color: #f8fafc;
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.025em;
        position: relative;
        z-index: 1;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

        @media (max-width: 768px) {
            font-size: 1.625rem;
            margin-bottom: 1.25rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
`;
export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    color: #e2e8f0;
    width: 100%;
    
    label {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #10b981;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-align: left;
        align-self: flex-start;

        @media (max-width: 480px) {
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
        }
    }
`;
export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 420px;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 
        0 15px 30px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    position: relative;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(16, 185, 129, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 1.75rem;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        padding: 1.25rem;
        border-radius: 1rem;
    }
`;
export const Input = styled.input`
    width: 100%;
    height: 2.75rem;
    margin-bottom: 1.25rem;
    padding: 0 1.25rem;
    background: rgba(15, 23, 42, 0.7);
    border: 2px solid rgba(16, 185, 129, 0.3);
    border-radius: 0.75rem;
    color: #f8fafc;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);

    &::placeholder {
        color: #94a3b8;
        font-weight: 400;
    }

    &:focus {
        outline: none;
        border-color: #10b981;
        background: rgba(15, 23, 42, 0.9);
        box-shadow: 
            0 0 0 3px rgba(16, 185, 129, 0.1),
            0 3px 8px rgba(16, 185, 129, 0.2);
        transform: translateY(-1px);
    }

    &:hover {
        border-color: rgba(16, 185, 129, 0.5);
        background: rgba(15, 23, 42, 0.8);
    }

    @media (max-width: 768px) {
        height: 2.5rem;
        padding: 0 1rem;
        font-size: 0.875rem;
    }

    @media (max-width: 480px) {
        height: 2.25rem;
        padding: 0 0.875rem;
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`;

export const ErrorMessage = styled.span`
    color: #ef4444;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: -0.75rem;
    margin-bottom: 0.75rem;
    text-align: center;
    background: rgba(239, 68, 68, 0.1);
    padding: 0.4rem 0.8rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(239, 68, 68, 0.2);

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.3rem 0.6rem;
    }
`;