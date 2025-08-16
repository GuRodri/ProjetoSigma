import styled from 'styled-components';

const StarRatingContainer = styled.div.attrs({
  className: 'produto-rating-container'
})`
  display: flex !important;
  align-items: center !important;
  margin: 0.375rem 0 !important;
  gap: 0.15rem !important;
`;

const StarIcon = styled.span.attrs({
  className: 'produto-rating-star'
})`
  color: ${props => (props.selected ? '#fbbf24 !important' : 'rgba(203, 213, 225, 0.3) !important')};
  cursor: ${props => (props.readOnly ? 'default !important' : 'pointer !important')};
  font-size: 1rem !important;
  transition: all 0.2s ease !important;
  text-shadow: ${props => (props.selected ? '0 1px 2px rgba(251, 191, 36, 0.5) !important' : 'none !important')};
  
  &:hover {
    color: ${props => (props.readOnly ? (props.selected ? '#fbbf24 !important' : 'rgba(203, 213, 225, 0.3) !important') : '#f59e0b !important')};
    transform: ${props => (props.readOnly ? 'none !important' : 'scale(1.05) !important')};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem !important;
  }
`;

const StarRatingStyles = {
  StarRatingContainer,
  StarIcon,
};

export default StarRatingStyles;
