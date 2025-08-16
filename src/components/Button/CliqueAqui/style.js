import styled from "styled-components"

export const MyButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    width: 100%;
    max-width: 180px;
    text-align: center;
    height: 3rem;
    border-radius: 0.75rem;
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 4px 15px 0 rgba(16, 185, 129, 0.4),
        0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
        transform: translateY(-2px) scale(1.05);
        box-shadow: 
            0 10px 25px 0 rgba(16, 185, 129, 0.5),
            0 4px 6px -1px rgba(0, 0, 0, 0.1);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(0) scale(1.02);
        box-shadow: 
            0 4px 15px 0 rgba(16, 185, 129, 0.4),
            0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        height: 2.75rem;
        font-size: 0.9rem;
        max-width: 160px;
        padding: 0.5rem 1.25rem;
    }

    @media (max-width: 480px) {
        height: 2.5rem;
        font-size: 0.8rem;
        max-width: 140px;
        padding: 0.5rem 1rem;
        letter-spacing: 0.01em;
    }
`