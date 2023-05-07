import React, { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from 'components/Section/Section';

import { AppStyle } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleFeedback(data) {
    switch (data) {
      case `good`:
        setGood(prevState => prevState + 1);
        break;
      case `neutral`:
        setNeutral(prevState => prevState + 1);
        break;
      case `bad`:
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <AppStyle>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </AppStyle>
  );
}
