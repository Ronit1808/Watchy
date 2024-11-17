import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Rating = ({ reviews }) => {
  // Calculate the average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Function to render stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon key={i} className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-lg bg-white mt-4">
      <h3 className="text-xl font-semibold mb-4">Ratings & Reviews</h3>
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center">{renderStars(Math.round(averageRating))}</div>
        <span className="text-gray-700">{averageRating.toFixed(1)} / 5</span>
      </div>
      <div className="text-sm text-gray-600 mb-4">{reviews.length} reviews</div>
      
      {/* Individual reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-t pt-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center">{renderStars(review.rating)}</div>
              <span className="font-semibold">{review.reviewer}</span>
            </div>
            <p className="text-gray-800">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
