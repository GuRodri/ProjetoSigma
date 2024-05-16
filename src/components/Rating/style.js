import styled from 'styled-components';

const StarRatingContainer = styled.div`
  font-size: 1em;
  display: inline-block;
`;

const StarIcon = styled.span`
  color: ${props => (props.selected ? 'yellow' : '#d9d9d9')};
  cursor: pointer;
  padding: 0.125em;
`;

const StarRatingStyles = {
  StarRatingContainer,
  StarIcon,
};

export default StarRatingStyles;
