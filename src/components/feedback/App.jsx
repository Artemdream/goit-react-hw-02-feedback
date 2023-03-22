import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: `${0}%`,
  };

  countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: this.countTotalFeedback(),
      positivePercentage: this.countPositiveFeedbackPercentage(),
    }));
  };

  countNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: this.countTotalFeedback(),
      positivePercentage: this.countPositiveFeedbackPercentage(),
    }));
  };

  countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: this.countTotalFeedback(),
      positivePercentage: this.countPositiveFeedbackPercentage(),
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: `${Math.round(
        (prevState.good / prevState.total) * 100
      )}%`,
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const { countGoodFeedback, countBadFeedback, countNeutralFeedback } = this;
    return (
      <div>
        <Section
          GoodFeedback={countGoodFeedback}
          BadFeedback={countBadFeedback}
          NeutralFeedback={countNeutralFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
