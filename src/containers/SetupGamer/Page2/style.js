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
`;

export const Coluna = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    color: #e2e8f0;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        gap: 1.25rem;
        margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
        margin-bottom: 1rem;
    }
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
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

    h2 {
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

export const Campo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border: 3px solid ${(props) => 
        props.selected 
            ? 'rgba(16, 185, 129, 0.8)' 
            : 'rgba(16, 185, 129, 0.3)'
    };
    border-radius: 1rem;
    cursor: pointer;
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${(props) => 
        props.selected 
            ? 'rgba(30, 41, 59, 0.9)' 
            : 'rgba(30, 41, 59, 0.6)'
    };
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: ${(props) => 
        props.selected 
            ? '0 6px 15px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            : '0 3px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    };
    background-image: ${(props) => (props.style ? props.style.backgroundImage : "none")};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => 
            props.selected 
                ? 'linear-gradient(145deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)' 
                : 'transparent'
        };
        transition: all 0.3s ease;
        border-radius: 1rem;
    }

    &:hover {
        transform: translateY(-4px) scale(1.05);
        border-color: rgba(16, 185, 129, 0.6);
        background-color: rgba(30, 41, 59, 0.8);
        box-shadow: 
            0 8px 20px rgba(16, 185, 129, 0.3),
            0 4px 10px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    &:active {
        transform: translateY(-2px) scale(1.02);
    }

    label {
        font-size: 0.8rem;
        font-weight: 700;
        text-align: center;
        color: #f8fafc;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        letter-spacing: 0.025em;
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 90%;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        border-radius: 0.875rem;

        &::before {
            border-radius: 0.875rem;
        }

        label {
            font-size: 0.7rem;
            bottom: 4px;
        }
    }

    @media (max-width: 480px) {
        width: 80px;
        height: 80px;
        border-radius: 0.75rem;

        &::before {
            border-radius: 0.75rem;
        }

        label {
            font-size: 0.65rem;
            bottom: 3px;
        }
    }
`;
