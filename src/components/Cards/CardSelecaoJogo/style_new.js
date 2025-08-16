import styled from "styled-components";

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;   
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    padding: 0.375rem;
    margin-bottom: 0.25rem;
    background: linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 0.375rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);

    &:hover {
        transform: translateY(-1px);
        border-color: rgba(16, 185, 129, 0.4);
        box-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 0.7) 100%);
    }
`;

export const BAdicionar1 = styled.button`
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    color: #0f172a;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 1px 3px rgba(16, 185, 129, 0.4),
        0 0 0 1px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

    &:hover {
        background: linear-gradient(135deg, #34d399 0%, #6ee7b7 100%);
        transform: translateY(-1px);
        box-shadow: 
            0 2px 4px rgba(16, 185, 129, 0.5),
            0 0 0 1px rgba(16, 185, 129, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    &:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 
            0 1px 3px rgba(16, 185, 129, 0.4),
            0 0 0 1px rgba(16, 185, 129, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

export const BRemover = styled.button`
    background: linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
    color: #f87171;
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 1px 3px rgba(248, 113, 113, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);

    &:hover {
        background: linear-gradient(145deg, rgba(248, 113, 113, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
        border-color: rgba(248, 113, 113, 0.5);
        color: #fca5a5;
        transform: translateY(-1px);
        box-shadow: 
            0 2px 4px rgba(248, 113, 113, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    &:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 
            0 1px 3px rgba(248, 113, 113, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

export const ContainerTexto = styled.div`
    display: flex;
    text-align: left;
    width: 100%;
    align-items: center;
    padding: 0.125rem 0;
    
    p, span {
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: 500;
        margin: 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }
    
    img {
        border-radius: 0.25rem;
        margin-right: 0.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(16, 185, 129, 0.1);
    }
`;

export const ContainerBotao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    gap: 0.5rem;
    padding-left: 0.5rem;
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
