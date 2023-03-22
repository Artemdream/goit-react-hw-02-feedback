import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';

export class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPositivePercentage: `${0}%`,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
    positivePercentage: this.props.initialPositivePercentage,
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
