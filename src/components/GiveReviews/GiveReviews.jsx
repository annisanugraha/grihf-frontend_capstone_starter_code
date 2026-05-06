import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./GiveReviews.css";

const GiveReviews = () => {
  const [review, setReview] = useState({ rating: 0, reviewText: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = sessionStorage.getItem("auth-token");
    if (!authToken) {
      navigate("/login");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(review),
      });
      if (response.ok) {
        // Post-submission disabling behaviour: disable form after submission
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reviews-container">
      <div className="reviews-card">
        <h2>Give a Review</h2>
        <p className="subtitle">Share your experience with us</p>

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= (hoveredStar || review.rating) ? "filled" : ""}`}
              onClick={() => !submitted && setReview({ ...review, rating: star })}
              onMouseEnter={() => !submitted && setHoveredStar(star)}
              onMouseLeave={() => !submitted && setHoveredStar(0)}
              style={{ cursor: submitted ? "default" : "pointer" }}
            >
              ★
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Review</label>
            <textarea
              name="reviewText"
              value={review.reviewText}
              onChange={(e) =>
                !submitted && setReview({ ...review, reviewText: e.target.value })
              }
              placeholder="Write your review here..."
              rows={5}
              required
              // Post-submission disabling: disabled when submitted is true
              disabled={submitted}
            />
          </div>
          {/* Submit button disabled after submission */}
          <button
            type="submit"
            className="btn-submit"
            disabled={submitted}
          >
            {submitted ? "Review Submitted ✓" : "Submit Review"}
          </button>
        </form>

        {submitted && (
          <div className="success-msg">
            Thank you for your feedback! Your review has been submitted.
          </div>
        )}
      </div>
    </div>
  );
};

export default GiveReviews;