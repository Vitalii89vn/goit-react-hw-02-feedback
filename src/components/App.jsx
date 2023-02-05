import { Component } from "react";
import { Notification } from "./Feedback/components/Notification"
import { Statistics } from "./Feedback/components/Statistics";
import { FeedbackOptions } from "./Feedback/components/FeedbackOptions";
import { Section } from "./Feedback/components/Section";
import css from "./Feedback/Feedback.module.css"

export class App extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    handleIncrement = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const { countTotalFeedback } = this;
        return Math.round(good / countTotalFeedback() * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const { handleIncrement, countPositiveFeedbackPercentage, countTotalFeedback } = this;
        return (
            <Section title="Please leave feedback">
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement} />
                <p className={css.title}>Statistics</p>
                {countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback" /> :
                    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                }
            </Section>
        );
    }
};
