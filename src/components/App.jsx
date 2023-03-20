// Відокремлюйте іменовані імпорти, це підвищує читабельність коду
import React, { Component } from "react";
import {Statistics} from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Section} from "./Section/Section";
import { Notification } from "./Notification/Notification";


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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good: "Good", neutral: "Neutral", bad: "Bad" }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="Hey, there is no stat"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );}
  }
    
