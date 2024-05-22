import React, { useState } from 'react';
import StarRatingStyles from './style';

const { StarRatingContainer, StarIcon } = StarRatingStyles;

const StarRating = ({ totalStars, onRate }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = starIndex => {
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
      
      {[...Array(5)].map((_, index) => (
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

