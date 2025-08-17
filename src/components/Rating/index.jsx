import React, { useState, useEffect } from 'react';
import StarRatingStyles from './style';

const { StarRatingContainer, StarIcon } = StarRatingStyles;

const StarRating = ({ totalStars = 5, value = 0, onRate }) => {
  const [selectedStars, setSelectedStars] = useState(value);

  const isReadOnly = !onRate; // modo leitura apenas se não houver onRate

  useEffect(() => {
    if (!isReadOnly) {
      setSelectedStars(value);
    }
  }, [value, isReadOnly]);

  const handleStarClick = (starIndex) => {
    if (isReadOnly) return;

    const newRating = starIndex + 1;
    setSelectedStars(newRating);
    onRate && onRate(newRating);
  };

  return (
    <StarRatingContainer>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          selected={index < selectedStars}
          onClick={() => handleStarClick(index)}
        >
          &#9733;
        </StarIcon>
      ))}
    </StarRatingContainer>
  );
};

export default StarRating;
