import React, { useState } from 'react';
import StarRatingStyles from './style';

const { StarRatingContainer, StarIcon } = StarRatingStyles;

const StarRating = ({ totalStars = 5, value = 0, onRate }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  // Se value for passado, modo apenas visualização
  const isReadOnly = value !== undefined && value !== null;
  const displayRating = isReadOnly ? Math.round(value) : selectedStars;

  const handleStarClick = (starIndex) => {
    if (isReadOnly) return; // não permite clique em leitura

    const newRating = starIndex + 1 === selectedStars ? 0 : starIndex + 1;
    setSelectedStars(newRating);
    if (onRate) onRate(newRating);
  };

  return (
    <StarRatingContainer>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          selected={index < displayRating}
          onClick={() => handleStarClick(index)}
          readOnly={isReadOnly}
        >
          &#9733;
        </StarIcon>
      ))}
      {isReadOnly && (
        <span style={{ marginLeft: '0.375rem', color: '#cbd5e1', fontSize: '0.75rem' }}>
          ({value.toFixed(1)})
        </span>
      )}
    </StarRatingContainer>
  );
};

export default StarRating;
