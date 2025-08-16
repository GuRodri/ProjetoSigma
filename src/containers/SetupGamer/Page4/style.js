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
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.02) 0%, transparent 50%);
        z-index: 0;
    }
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
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

    h1 {
        text-align: center;
        color: #f8fafc;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 0 0 2.5rem 0;
        letter-spacing: -0.025em;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
            border-radius: 1px;
        }
    }

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 2rem 1.5rem;
        
        h1 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 480px) {
        max-width: 95%;
        padding: 1.75rem 1.25rem;
        border-radius: 0.75rem;
        
        h1 {
            font-size: 1.375rem;
            margin-bottom: 1.75rem;
        }
    }
`;

export const Coluna = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        gap: 1.25rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.75rem;
    }
`;

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background: ${(props) => (props.selected ? 
        "linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)" : 
        "linear-gradient(145deg, rgba(51, 65, 85, 0.3) 0%, rgba(30, 41, 59, 0.3) 100%)")};
    backdrop-filter: blur(10px);
    border: 1.5px solid ${(props) => (props.selected ? "rgba(16, 185, 129, 0.4)" : "rgba(100, 116, 139, 0.2)")};
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: ${(props) => (props.selected ? 
        "0 4px 15px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)" : 
        "0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.02)")};

    label {
        color: ${(props) => (props.selected ? "#34d399" : "#e2e8f0")};
        font-size: 0.975rem;
        font-weight: 500;
        letter-spacing: 0.025em;
        transition: all 0.3s ease;
        text-transform: capitalize;
    }

    &:hover {
        transform: translateY(-2px);
        border-color: ${(props) => (props.selected ? "rgba(16, 185, 129, 0.6)" : "rgba(16, 185, 129, 0.3)")};
        background: ${(props) => (props.selected ? 
            "linear-gradient(145deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%)" : 
            "linear-gradient(145deg, rgba(16, 185, 129, 0.06) 0%, rgba(51, 65, 85, 0.4) 100%)")};
        box-shadow: ${(props) => (props.selected ? 
            "0 6px 20px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)" : 
            "0 4px 12px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04)")};

        label {
            color: ${(props) => (props.selected ? "#6ee7b7" : "#10b981")};
        }
    }

    &:active {
        transform: translateY(-1px);
        transition: all 0.15s ease;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        
        label {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        width: 180px;
        height: 80px;
        
        label {
            font-size: 1rem;
        }
    }
`;
