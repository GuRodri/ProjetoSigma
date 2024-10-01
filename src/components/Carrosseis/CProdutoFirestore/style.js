import styled from 'styled-components';

export const CarouselContainer = styled.div`
  .carousel .slide {
    background-color: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    max-width: 600px;
  }

  .carousel img {
    max-height: 400px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }

  .carousel img:hover {
    transform: scale(1.05);
  }

  .carousel .carousel-status {
    display: none;
  }

  .carousel .control-prev.control-arrow,
  .carousel .control-next.control-arrow {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s ease;
  }

  .carousel .control-prev.control-arrow:hover,
  .carousel .control-next.control-arrow:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    font-size: 20px;
    color: white;
  }

  .carousel .control-dots .dot {
    background: #ccc;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .carousel .control-dots .dot.selected {
    background: #333;
  }

  @media (max-width: 768px) {
    .carousel .slide {
      max-width: 100%;
    }

    .carousel img {
      max-height: 80%;
    }

    .carousel .control-prev.control-arrow,
    .carousel .control-next.control-arrow {
      width: 30px;
      height: 30px;
    }
  }
`;
