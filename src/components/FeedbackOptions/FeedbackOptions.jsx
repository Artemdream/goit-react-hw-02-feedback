import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onFeedback }) => (
  <div>
    {options.map(value => (
      <button type="button" value={value} onClick={onFeedback}>
        {value[0].toUpperCase() + value.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
