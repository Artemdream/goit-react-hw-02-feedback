import React from 'react';
import './Feedback.css';

export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => (
  <div>
    <h1>Please leave feedback</h1>
    <button type="button" onClick={onGoodFeedback}>
      Good
    </button>
    <button type="button" onClick={onNeutralFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);
