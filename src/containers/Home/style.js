import styled from "styled-components"

export const ContainerHome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    min-height: 77.8vh;
    justify-content: flex-start;
    max-width: 1400px;
    margin: 0 auto;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%);
    border-radius: 1.5rem;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
    }

    > * {
        position: relative;
        z-index: 1;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 2rem;
        border-radius: 1rem;
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        gap: 1.5rem;
        border-radius: 0.75rem;
    }
`;

export const Title = styled.h1 `
    color: #d9d9d9;
    font-size: 1.25rem;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const SubTitle = styled.h2 `
    color: #d9d9d9;
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

export const SmallTitle = styled.h3 `
    color: #d9d9d9;
    font-size: 0.75rem;
    margin: 0.5rem 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    @media (max-width: 480px) {
        font-size: 0.65rem;
    }
`;

export const ContainerListagem = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;