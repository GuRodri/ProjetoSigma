import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.02) 0%, transparent 50%);
        z-index: 0;
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
    }
`;

export const ContainerOrdenacao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;

    label {
        color: #e2e8f0;
        font-size: 0.9rem;
        font-weight: 500;
        margin-right: 0.75rem;
        letter-spacing: 0.025em;
    }

    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 1.25rem;
        
        label {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        
        label {
            font-size: 0.9rem;
        }
    }
`;

export const Select = styled.select`
    background: linear-gradient(145deg, rgba(51, 65, 85, 0.3) 0%, rgba(30, 41, 59, 0.3) 100%);
    backdrop-filter: blur(10px);
    border: 1.5px solid rgba(100, 116, 139, 0.2);
    border-radius: 0.75rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.75rem 1rem;
    min-width: 140px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.02);

    &:hover {
        border-color: rgba(16, 185, 129, 0.3);
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.06) 0%, rgba(51, 65, 85, 0.4) 100%);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    &:focus {
        outline: none;
        border-color: rgba(16, 185, 129, 0.5);
        box-shadow: 
            0 0 0 3px rgba(16, 185, 129, 0.1),
            0 4px 12px rgba(16, 185, 129, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    option {
        background: #1e293b;
        color: #e2e8f0;
        padding: 0.5rem;
        border: none;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 0.7rem 0.9rem;
        min-width: 120px;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.75rem 1rem;
        width: 100%;
        max-width: 200px;
    }
`;

export const ContainerListagem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(15px);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.15);
    position: relative;
    z-index: 1;
    gap: 1.5rem;
    min-height: 400px;

    @media (max-width: 1024px) {
        max-width: 95%;
        padding: 1.75rem;
        gap: 1.25rem;
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        gap: 1rem;
        border-radius: 0.75rem;
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
        gap: 0.75rem;
        min-height: 300px;
    }
`;

export const MensagemNenhumProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    color: #94a3b8;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.025em;
    position: relative;

    &::before {
        content: '🎮';
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        font-size: 1.125rem;
        height: 250px;
        
        &::before {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        height: 200px;
        
        &::before {
            font-size: 2rem;
        }
    }
`;