import styled from 'styled-components';

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
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.02) 0%, transparent 50%);
        z-index: 0;
    }

    h2 {
        text-align: center;
        color: #f8fafc;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 0 0 2.5rem 0;
        letter-spacing: -0.025em;
        position: relative;
        z-index: 1;

        &::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
            border-radius: 1px;
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        
        h2 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
        
        h2 {
            font-size: 1.375rem;
            margin-bottom: 1.75rem;
        }
    }
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(15px);
    border-radius: 1rem;
    padding: 2.5rem 2rem;
    box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.15);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    gap: 1.5rem;

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 2rem 1.5rem;
        gap: 1.25rem;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        padding: 1.75rem 1.25rem;
        border-radius: 0.75rem;
        gap: 1rem;
    }
`;

export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;

    h3 {
        color: #e2e8f0;
        font-size: 0.95rem;
        font-weight: 500;
        margin: 0 0 0.75rem 0;
        letter-spacing: 0.025em;
        text-align: center;
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
    }
`;

export const Campo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 280px;
    padding: 0.875rem 1.25rem;
    background: linear-gradient(145deg, rgba(51, 65, 85, 0.3) 0%, rgba(30, 41, 59, 0.3) 100%);
    backdrop-filter: blur(10px);
    border: 1.5px solid rgba(100, 116, 139, 0.2);
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.02);

    label {
        color: #e2e8f0;
        font-size: 0.9rem;
        font-weight: 400;
        margin: 0;
        text-align: center;
        letter-spacing: 0.025em;
        transition: all 0.3s ease;
    }

    &:hover {
        transform: translateY(-1px);
        border-color: rgba(16, 185, 129, 0.3);
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.06) 0%, rgba(51, 65, 85, 0.4) 100%);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04);

        label {
            color: #10b981;
        }
    }

    &:active {
        transform: translateY(0);
        transition: all 0.15s ease;
    }

    @media (max-width: 768px) {
        max-width: 260px;
        padding: 0.8rem 1rem;
        
        label {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0.75rem 1rem;
        
        label {
            font-size: 0.9rem;
        }
    }
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 280px;
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 0.75rem;
    margin-top: 0.5rem;
    box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(16, 185, 129, 0.1);
    z-index: 10;
    overflow: hidden;
    animation: fadeInUp 0.2s ease;

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @media (max-width: 768px) {
        max-width: 260px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;

export const DropdownItem = styled.div`
    padding: 0.875rem 1.25rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 1px solid rgba(100, 116, 139, 0.1);
    letter-spacing: 0.025em;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
        color: #34d399;
        padding-left: 1.5rem;
    }

    &:active {
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
        color: #6ee7b7;
    }

    @media (max-width: 768px) {
        padding: 0.8rem 1rem;
        font-size: 0.85rem;
        
        &:hover {
            padding-left: 1.25rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
        
        &:hover {
            padding-left: 1.25rem;
        }
    }
`;
