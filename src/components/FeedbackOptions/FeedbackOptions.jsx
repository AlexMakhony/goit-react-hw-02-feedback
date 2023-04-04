import {OptionButtonsLike} from "./FeedbackOption.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);
  return (
    <>
      {optionKeys.map((option) => (
        <OptionButtonsLike key={option} onClick={() => onLeaveFeedback(option)}>
          {options[option]}
        </OptionButtonsLike>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

