import React, { useState } from 'react';
import StarRatingStyles from './style';

const { StarRatingContainer, StarIcon } = StarRatingStyles;

const StarRating = ({ totalStars = 5, onRate, rating }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  // Se é apenas para visualização (rating passado), não permite interação
  const isReadOnly = rating !== undefined;
  const displayRating = isReadOnly ? Math.round(rating) : selectedStars;

  const handleStarClick = starIndex => {
    if (isReadOnly) return; // Não permite clique se é apenas visualização
    
    if (starIndex + 1 === selectedStars) {
      setSelectedStars(0);
      onRate(0);
    } else {
      setSelectedStars(starIndex + 1);
      onRate(starIndex + 1);
    }
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
          ({rating.toFixed(1)})
        </span>
      )}
    </StarRatingContainer>
  );
};

export default StarRating;

