import styled from 'styled-components';

// Container das informações do produto com classe específica
export const ProductInfoContainer = styled.div.attrs({
  className: 'produto-info-container'
})`
  padding: 1.25rem;
  background: transparent !important; /* Remove background próprio */
  border: none !important; /* Remove border próprio */
  color: #f8fafc !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  gap: 0.75rem !important;
  border-radius: 0 !important; /* Remove border-radius próprio */
  width: 100% !important;
  max-width: 450px !important;
  height: 100% !important; /* Aceita a altura do container pai */
  overflow: auto !important; /* Permite scroll interno se necessário */
  box-sizing: border-box !important;
  transition: all 0.3s ease !important;

  /* Reset de estilos globais */
  p, h1, h2, h3, h4, h5, h6, span, div {
    color: inherit !important;
  }

  @media (max-width: 768px) {
    padding: 1rem !important;
    max-width: 100% !important;
    gap: 0.6rem !important;
  }

  @media (max-width: 480px) {
    padding: 0.875rem !important;
    gap: 0.5rem !important;
    border-radius: 0.75rem !important;
  }
`;

// Título do produto com estilo elegante e classe específica
export const ProductTitle = styled.h2.attrs({
  className: 'produto-titulo'
})`
  font-size: 1.375rem !important;
  font-weight: 600 !important;
  margin: 0 !important;
  color: #f8fafc !important;
  letter-spacing: -0.025em !important;
  line-height: 1.2 !important;
  position: relative !important;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 45px;
    height: 2px;
    background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem !important;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem !important;
  }
`;

// Descrição do produto com classe específica
export const ProductDescription = styled.p.attrs({
  className: 'produto-descricao'
})`
  font-size: 0.875rem !important;
  line-height: 1.5 !important;
  color: #cbd5e1 !important;
  margin: 0 !important;
  text-align: justify !important;

  @media (max-width: 480px) {
    font-size: 0.8rem !important;
    line-height: 1.4 !important;
  }
`;

// Preço destacado com classe específica
export const ProductPrice = styled.p.attrs({
  className: 'produto-preco'
})`
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  margin: 0 !important;
  color: #10b981 !important;
  text-shadow: 0 1px 3px rgba(16, 185, 129, 0.4) !important;
  position: relative !important;
  display: flex !important;
  align-items: baseline !important;
  gap: 0.375rem !important;

  strong {
    color: #34d399 !important;
    font-size: 1.4rem !important;
    text-shadow: 0 2px 4px rgba(52, 211, 153, 0.3) !important;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem !important;
    
    strong {
      font-size: 1.25rem !important;
    }
  }
`;

// Informação do estoque com classe específica
export const StockInfo = styled.p.attrs({
  className: 'produto-estoque'
})`
  font-size: 0.8rem !important;
  color: ${(props) => (props.quantidadeEstoque > 0 ? '#6ee7b7 !important' : '#fca5a5 !important')};
  margin: 0 !important;
  font-weight: 500 !important;
  position: relative !important;
  padding-left: 1.25rem !important;

  &::before {
    content: ${(props) => (props.quantidadeEstoque > 0 ? "'✓'" : "'⚠'")};
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    color: ${(props) => (props.quantidadeEstoque > 0 ? '#10b981 !important' : '#ef4444 !important')};
    font-weight: bold !important;
    font-size: 0.75rem !important;
  }

  strong {
    color: ${(props) => (props.quantidadeEstoque > 0 ? '#34d399 !important' : '#ef4444 !important')};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem !important;
  }
`;

// Container do seletor de quantidade com classe específica
export const QuantityContainer = styled.div.attrs({
  className: 'produto-quantidade'
})`
  display: flex !important;
  flex-direction: column !important;
  gap: 0.375rem !important;
  margin: 0.5rem 0 !important;

  label {
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    color: #cbd5e1 !important;
    letter-spacing: 0.025em !important;
  }

  select {
    padding: 0.5rem !important;
    border-radius: 0.4rem !important;
    border: 1px solid rgba(100, 116, 139, 0.3) !important;
    background: rgba(30, 41, 59, 0.6) !important;
    backdrop-filter: blur(10px) !important;
    color: #f8fafc !important;
    font-size: 0.8rem !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    max-width: 100px !important;

    &:hover {
      border-color: rgba(16, 185, 129, 0.4) !important;
      background: rgba(30, 41, 59, 0.8) !important;
    }

    &:focus {
      outline: none !important;
      border-color: #10b981 !important;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
      background: rgba(30, 41, 59, 0.9) !important;
    }

    option {
      background: #1e293b !important;
      color: #f8fafc !important;
      padding: 0.375rem !important;
    }
  }

  @media (max-width: 480px) {
    label {
      font-size: 0.75rem !important;
    }

    select {
      font-size: 0.75rem !important;
      padding: 0.45rem !important;
    }
  }
`;

// Container dos botões com classe específica e isolamento total
export const ProductButtonsContainer = styled.div.attrs({
  className: 'produto-botoes-container'
})`
  display: flex !important;
  justify-content: space-between !important;
  gap: 0.5rem !important;
  margin-top: 0.75rem !important;

  /* Garante que todos os botões tenham o mesmo tamanho */
  > * {
    flex: 1 !important;
  }

  /* Reset completo para todos os botões dentro deste container */
  button, 
  > * button {
    all: unset !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
  }

  /* BOTÃO COMPRAR - FORÇA VERDE ABSOLUTO */
  button:first-child,
  > *:first-child button,
  .botao-comprar-produto-sigma {
    /* RESET E FORÇA VERDE */
    all: unset !important;
    box-sizing: border-box !important;
    flex: 1 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 40px !important;
    width: 100% !important;
    
    /* CORES ESPECÍFICAS - VERDE SIGMA FORÇA TOTAL */
    background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%) !important;
    background-color: #10b981 !important;
    color: #ffffff !important;
    
    /* LAYOUT */
    padding: 0.65rem 0.875rem !important;
    border-radius: 0.5rem !important;
    border: none !important;
    margin: 0 !important;
    
    /* TIPOGRAFIA */
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    text-align: center !important;
    text-decoration: none !important;
    line-height: 1.2 !important;
    
    /* INTERAÇÃO */
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    position: relative !important;
    overflow: hidden !important;
    
    /* SOMBRA VERDE */
    box-shadow: 
      0 3px 12px rgba(16, 185, 129, 0.3),
      0 2px 6px rgba(0, 0, 0, 0.2) !important;
    
    /* REMOVE APARÊNCIA PADRÃO */
    outline: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;

    &:hover {
      color: #ffffff !important;
      background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%) !important;
      background-color: #059669 !important;
      transform: translateY(-1px) !important;
      box-shadow: 
        0 5px 16px rgba(16, 185, 129, 0.4),
        0 3px 10px rgba(0, 0, 0, 0.3) !important;
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
  }

  /* Botão Adicionar ao Carrinho - estilo específico e isolado */
  button:last-child,
  .botao-adicionar-carrinho {
    /* RESET ABSOLUTO - FORÇA TOTAL */
    all: unset !important;
    box-sizing: border-box !important;
    
    /* LAYOUT E DIMENSÕES */
    flex: 1 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 40px !important;
    width: 100% !important;
    
    /* CORES ESPECÍFICAS - AMARELO SIGMA */
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%) !important;
    background-color: #fbbf24 !important;
    color: #1f2937 !important;
    
    /* BORDA E ESPAÇAMENTO */
    padding: 0.65rem 0.875rem !important;
    border-radius: 0.5rem !important;
    border: none !important;
    margin: 0 !important;
    
    /* TIPOGRAFIA */
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    text-align: center !important;
    text-decoration: none !important;
    line-height: 1.2 !important;
    
    /* INTERAÇÃO E ANIMAÇÃO */
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    position: relative !important;
    overflow: hidden !important;
    
    /* SOMBRA ESPECÍFICA AMARELA */
    box-shadow: 
      0 3px 12px rgba(251, 191, 36, 0.3),
      0 2px 6px rgba(0, 0, 0, 0.2) !important;
    
    /* REMOVE APARÊNCIA PADRÃO */
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
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent) !important;
      transition: left 0.5s ease !important;
      z-index: 1 !important;
    }

    /* ESTADOS DE INTERAÇÃO - SEMPRE AMARELO */
    &:hover {
      color: #1f2937 !important;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%) !important;
      background-color: #f59e0b !important;
      transform: translateY(-1px) !important;
      box-shadow: 
        0 5px 16px rgba(251, 191, 36, 0.4),
        0 3px 10px rgba(0, 0, 0, 0.3) !important;

      &::before {
        left: 100% !important;
      }
    }

    &:active {
      color: #1f2937 !important;
      background: linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%) !important;
      background-color: #d97706 !important;
      transform: translateY(0) !important;
      transition: all 0.15s ease !important;
    }

    &:focus {
      color: #1f2937 !important;
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%) !important;
      background-color: #fbbf24 !important;
      outline: none !important;
      box-shadow: 
        0 3px 12px rgba(251, 191, 36, 0.3),
        0 2px 6px rgba(0, 0, 0, 0.2),
        0 0 0 3px rgba(251, 191, 36, 0.2) !important;
    }

    &:disabled {
      color: #9ca3af !important;
      background: linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%) !important;
      background-color: #6b7280 !important;
      cursor: not-allowed !important;
      transform: none !important;
      opacity: 0.7 !important;
      
      &:hover {
        color: #9ca3af !important;
        background: linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%) !important;
        background-color: #6b7280 !important;
        transform: none !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 0.45rem !important;

    button:last-child,
    .botao-adicionar-carrinho {
      font-size: 0.75rem !important;
      padding: 0.6rem 0.8rem !important;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column !important;
    gap: 0.5rem !important;

    button:last-child,
    .botao-adicionar-carrinho {
      font-size: 0.7rem !important;
      padding: 0.55rem 0.75rem !important;
    }
  }
`;
