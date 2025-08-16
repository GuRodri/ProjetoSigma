import styled from "styled-components"

export const MyButton = styled.button.attrs({
  className: 'botao-comprar-produto-sigma'
})`
    /* RESET ABSOLUTO - Remove TODOS os estilos herdados */
    all: unset !important;
    box-sizing: border-box !important;
    
    /* ISOLAMENTO ESPECÍFICO - Força tema VERDE SIGMA */
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    
    /* CORES FORÇA TOTAL - VERDE SIGMA */
    color: #ffffff !important;
    background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%) !important;
    background-color: #10b981 !important;
    
    /* DIMENSÕES ESPECÍFICAS */
    width: 100% !important;
    height: auto !important;
    min-height: 40px !important;
    max-width: none !important;
    
    /* LAYOUT E ESPAÇAMENTO */
    text-align: center !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 0.65rem 0.875rem !important;
    margin: 0 !important;
    
    /* TIPOGRAFIA FORÇA */
    font-size: 0.8rem !important;
    font-weight: 700 !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    line-height: 1.2 !important;
    text-decoration: none !important;
    
    /* INTERAÇÃO E ANIMAÇÃO */
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    position: relative !important;
    overflow: hidden !important;
    
    /* SOMBRA ESPECÍFICA VERDE */
    box-shadow: 
        0 3px 12px rgba(16, 185, 129, 0.3),
        0 2px 6px rgba(0, 0, 0, 0.2) !important;
    
    /* REMOVE QUALQUER OUTLINE PADRÃO */
    outline: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;

    /* EFEITO BRILHO */
    &::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: -100% !important;
        width: 100% !important;
        height: 100% !important;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent) !important;
        transition: left 0.5s ease !important;
        z-index: 1 !important;
    }

    /* ESTADOS DE INTERAÇÃO - SEMPRE VERDE */
    &:hover {
        color: #ffffff !important;
        background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%) !important;
        background-color: #059669 !important;
        transform: translateY(-1px) !important;
        box-shadow: 
            0 5px 16px rgba(16, 185, 129, 0.4),
            0 3px 10px rgba(0, 0, 0, 0.3) !important;

        &::before {
            left: 100% !important;
        }
    }

    &:active {
        color: #ffffff !important;
        background: linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%) !important;
        background-color: #047857 !important;
        transform: translateY(0) !important;
        transition: all 0.15s ease !important;
    }

    &:focus {
        color: #ffffff !important;
        background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%) !important;
        background-color: #10b981 !important;
        outline: none !important;
        box-shadow: 
            0 3px 12px rgba(16, 185, 129, 0.3),
            0 2px 6px rgba(0, 0, 0, 0.2),
            0 0 0 3px rgba(16, 185, 129, 0.2) !important;
    }

    /* DESATIVA QUALQUER ESTADO DISABLED */
    &:disabled {
        color: #ffffff !important;
        background: linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%) !important;
        background-color: #6b7280 !important;
        cursor: not-allowed !important;
        transform: none !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
    }

    /* RESPONSIVIDADE */
    @media (max-width: 768px) {
        font-size: 0.75rem !important;
        padding: 0.6rem 0.8rem !important;
        min-height: 38px !important;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem !important;
        padding: 0.55rem 0.75rem !important;
        min-height: 36px !important;
    }
`