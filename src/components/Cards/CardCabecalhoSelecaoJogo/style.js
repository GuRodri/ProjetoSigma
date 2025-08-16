import styled from 'styled-components';

export const CardHome2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 0;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem;
    background: linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
`;

export const ContainerEspacamento = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;


export const ContainerTexto = styled.div`
    flex: 1;
    text-align: left;

    p {
        margin: 0;
        color: #d9d9d9;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
`;

export const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.375rem;
    min-width: 100px;

    p {
        margin: 0;
        color: #d9d9d9;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
`;

export const P1 = styled.p`
    font-weight: 600;
    width: 100%;
    color: #d9d9d9 !important;
    font-size: 0.7rem !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const P5 = styled.p`
    font-weight: 600;
    width: 100%;
    color: #d9d9d9 !important;
    font-size: 0.7rem !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;
