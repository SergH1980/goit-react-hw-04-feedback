import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonStyle } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  function onClickFeedback(event) {
    const parameter = event.currentTarget.name;
    onLeaveFeedback(parameter);
  }

  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <ButtonStyle name={option} onClick={onClickFeedback} type="button">
              {option}
            </ButtonStyle>
          </li>
        );
      })}
    </ButtonList>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
