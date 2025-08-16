import styled from "styled-components"

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

export const ContainerEspacamento3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 1.25rem;
    padding: 1.75rem;
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
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        padding: 1.25rem;
        border-radius: 1rem;
    }
`;


export const LinkCustom = styled.a`
    color: #d9d9d9;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.75rem;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;

    &:hover {
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
        transform: translateY(-1px);
        border-color: rgba(16, 185, 129, 0.4);
        color: #ffffff;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem;
        padding: 0.4rem 0.8rem;
    }
`;

export const ListagemJogos = styled.ul`
    height: 300px;
    overflow-y: auto;
    width: 100%;
    background: linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%);
    backdrop-filter: blur(10px);
    border-radius: 0.75rem;
    padding: 0.625rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
    margin: 0;
    margin-bottom: 1rem;
    list-style: none;
    box-shadow: 
        inset 0 1px 3px rgba(0, 0, 0, 0.2),
        0 1px 6px rgba(0, 0, 0, 0.1);

    /* Custom Scrollbar Styles */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.5);
        border-radius: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.6) 0%, rgba(16, 185, 129, 0.4) 100%);
        border-radius: 6px;
        border: 1px solid rgba(16, 185, 129, 0.3);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.6) 100%);
    }

    /* Firefox Scrollbar Styles */
    scrollbar-width: thin;
    scrollbar-color: rgba(16, 185, 129, 0.6) rgba(15, 23, 42, 0.5);

    @media (max-width: 768px) {
        height: 260px;
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        height: 240px;
        padding: 0.4rem;
        border-radius: 0.625rem;
    }
`;



export const ContainerBotao = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        margin: 1.25rem 0;
    }

    @media (max-width: 480px) {
        margin: 1rem 0;
    }
`;


export const ContainerTitulo = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 1.25rem;

    h2 {
        text-align: center;
        color: #f8fafc;
        font-size: 1.625rem;
        font-weight: 700;
        margin: 0;
        background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.025em;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.375rem;
        }
    }
`;