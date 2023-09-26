import React, { useState } from 'react';

function ReviewForm({ bookId, handleSubmitReview }) {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitReview(bookId, reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;