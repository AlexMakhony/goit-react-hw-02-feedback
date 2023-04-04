// Відокремлюйте іменовані імпорти, це підвищує читабельність коду
import React, { Component } from "react";
import {Statistics} from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import {
  FeedBackWrapper,
  LikeWrapper,
  ButtonsArea,
  Title,
  ButtonsWrapper,
} from "./App.styled";
import PropTypes from 'prop-types';


export class App extends Component {
  constructor() {
  super();
  // Задаємо параметри за замовченням
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // Не забуваємо оприділити на що росповсюджується наша функція
  this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }
  // Задаємо функцію зміни стейту, мутація заборонена
  onLeaveFeedback(option) {
    this.setState((prevState) => ({
    [option]: prevState[option] + 1,
    }));
    }
  // УВАГА РЕТЮРН РОБИМО У РЕНДЕРІ
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return (
      <>
      <FeedBackWrapper>
        <ButtonsArea>
          <Title>Чекаємо на Ваш відгук</Title>
          <ButtonsWrapper>
          <FeedbackOptions
            options={{ 
              good: "Супер", 
              neutral: "Добре", 
              bad: "Погано" }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          </ButtonsWrapper>
        </ButtonsArea>
        <LikeWrapper title="Statistics">
          {total === 0 ? (
            <Notification message="Ooops немає відгуків"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </LikeWrapper>
      </FeedBackWrapper>
      </>
    );}
  }
    
  App.propTypes = {
    options: PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    }),
    onLeaveFeedback: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };