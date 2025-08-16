import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%; /* Aceita altura do container pai */
  max-width: none; /* Remove limitação de largura */
  background: transparent; /* Remove background próprio */
  border-radius: 0; /* Remove border-radius próprio */
  padding: 1rem;
  border: none; /* Remove border próprio */
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);

  .carousel {
    border-radius: 0.75rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .slide {
    background: transparent;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0 auto;
    transition: all 0.3s ease;
    height: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .carousel img {
    width: 100%;
    height: auto; /* Permite que a altura se ajuste proporcionalmente */
    max-height: 70%; /* Limite máximo da altura do container */
    min-height: 250px; /* Altura mínima para garantir visibilidade */
    object-fit: contain; /* Mantém proporção da imagem sem cortar */
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    filter: brightness(0.95) contrast(1.05);

    &:hover {
      transform: scale(1.02);
      filter: brightness(1) contrast(1.1);
    }
  }

  .carousel .carousel-status {
    display: none;
  }

  /* Botões de navegação */
  .carousel .control-prev.control-arrow,
  .carousel .control-next.control-arrow {
    background: linear-gradient(145deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.8;

    &:hover {
      background: linear-gradient(145deg, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.2) 100%);
      border-color: rgba(16, 185, 129, 0.5);
      opacity: 1;
      transform: translateY(-50%) scale(1.05);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    &:active {
      transform: translateY(-50%) scale(0.98);
    }
  }

  .carousel .control-prev.control-arrow {
    left: 10px;
  }

  .carousel .control-next.control-arrow {
    right: 10px;
  }

  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    font-size: 18px;
    color: #e2e8f0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* Indicadores (dots) */
  .carousel .control-dots {
    margin-top: 1rem;
    padding: 0.5rem 0;
  }

  .carousel .control-dots .dot {
    background: rgba(100, 116, 139, 0.4);
    width: 10px;
    height: 10px;
    margin: 0 4px;
    border-radius: 50%;
    transition: all 0.3s ease;
    border: 1px solid rgba(16, 185, 129, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(16, 185, 129, 0.3);
      border-color: rgba(16, 185, 129, 0.4);
      transform: scale(1.1);
    }
  }

  .carousel .control-dots .dot.selected {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    border-color: rgba(16, 185, 129, 0.6);
    transform: scale(1.15);
    box-shadow: 
      0 2px 6px rgba(16, 185, 129, 0.4),
      0 0 8px rgba(16, 185, 129, 0.2);
  }

  /* Loading e Error States */
  > div:not(.carousel) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    background: linear-gradient(145deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.4) 100%);
    border-radius: 0.75rem;
    border: 1px solid rgba(16, 185, 129, 0.05);

    &::before {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.75rem;

    .carousel img {
      max-height: 60%; /* Ajuste para telas menores */
      min-height: 200px;
      object-fit: contain;
    }

    .carousel .control-prev.control-arrow,
    .carousel .control-next.control-arrow {
      width: 40px;
      height: 40px;
    }

    .carousel .control-dots .dot {
      width: 8px;
      height: 8px;
      margin: 0 3px;
    }

    > div:not(.carousel) {
      min-height: 200px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    border-radius: 0.75rem;
    padding: 0.5rem;

    .carousel img {
      max-height: 50%; /* Menor ainda para mobile */
      min-height: 150px;
      object-fit: contain;
    }

    .carousel .control-prev.control-arrow,
    .carousel .control-next.control-arrow {
      width: 35px;
      height: 35px;
    }

    .carousel .control-prev.control-arrow {
      left: 5px;
    }

    .carousel .control-next.control-arrow {
      right: 5px;
    }

    > div:not(.carousel) {
      height: 250px;
    }
  }
`;
