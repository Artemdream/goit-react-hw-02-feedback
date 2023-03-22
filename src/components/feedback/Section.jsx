import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import React from 'react';

export const Section = ({
  GoodFeedback,
  BadFeedback,
  NeutralFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <section>
    <FeedbackOptions
      onGoodFeedback={GoodFeedback}
      onBadFeedback={BadFeedback}
      onNeutralFeedback={NeutralFeedback}
    />
    <h2>Statistics</h2>
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </section>
);
