import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
  overflow: hidden;
  gap: 2rem;

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

  /* Garantindo que os componentes de largura total ocupem toda a tela */
  > *:not(div:first-of-type) {
    width: 100%;
    max-width: 1200px;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }

  /* Estilos para loading e erro */
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    color: #e2e8f0;
    font-size: 1.125rem;
    font-weight: 500;
    position: relative;
    z-index: 1;

    &::before {
      content: '⚡';
      font-size: 2rem;
      margin-right: 0.5rem;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  }

  /* Estilos para mensagem de erro */
  > div:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(15px);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.15);
    position: relative;
    z-index: 1;;

    p {
      color: #fca5a5;
      font-size: 1rem;
      text-align: center;
      margin: 0 0 1.5rem 0;
      line-height: 1.5;
    }

    button {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);

      &:hover {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 1.5rem 0.5rem;
    gap: 1.5rem;
    > *:not(div:first-of-type) {
      max-width: 98%;
    }
  }
  @media (max-width: 900px) {
    padding: 1rem 0.25rem;
    gap: 1rem;
    > *:not(div:first-of-type) {
      max-width: 100%;
    }
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0.1rem;
    gap: 0.5rem;
    > *:not(div:first-of-type) {
      max-width: 100%;
    }
  }
`;

export const ContainerEspacamento = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 0.875rem;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.15);
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  gap: 1.5rem;
  min-height: 350px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.25),
      0 0 20px rgba(16, 185, 129, 0.05);
    border-color: rgba(16, 185, 129, 0.2);
  }

  /* Ambos os componentes ficam no mesmo card, lado a lado */
  > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    min-width: 0;
  }

  /* Card da esquerda - CProdutoFirestore */
  > *:first-child {
    justify-content: center;
    align-items: center;
    padding-right: 0.75rem;
    border-right: 1px solid rgba(16, 185, 129, 0.1);
  }

  /* Card da direita - InformacaoProduto */
  > *:last-child {
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 0.75rem;
  }

  @media (max-width: 1200px) {
    max-width: 98%;
    padding: 1.25rem;
    gap: 1.25rem;
    min-height: 300px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    margin-bottom: 1rem;
    min-height: auto;
    > * {
      width: 100%;
      min-height: unset;
      padding: 0;
      justify-content: center;
      align-items: center;
    }
    > *:first-child {
      order: 1;
      border-right: none;
      border-bottom: 1px solid rgba(16, 185, 129, 0.1);
      padding-bottom: 0.5rem;
    }
    > *:last-child {
      order: 2;
      border-bottom: none;
      padding-top: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 0.625rem;
    margin-bottom: 0.5rem;
    > * {
      width: 100%;
      min-height: unset;
      padding: 0;
      justify-content: center;
      align-items: center;
    }
    > *:first-child {
      order: 1;
      border-right: none;
      border-bottom: 1px solid rgba(16, 185, 129, 0.1);
      padding-bottom: 0.25rem;
    }
    > *:last-child {
      order: 2;
      border-bottom: none;
      padding-top: 0.25rem;
    }
  }
`;
export const ContainerEspacamento2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 1rem auto;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    max-width: 98%;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto 0.5rem auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto 0.25rem auto;
    padding: 0.25rem;
  }
`;
