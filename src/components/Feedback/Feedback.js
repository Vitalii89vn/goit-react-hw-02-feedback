import { Component } from "react";
import css from "./Feedback.module.css"
import { Notification } from "./Notification";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    handleIncrementG = () => {
     
        this.setState(prevState => ({
            good: prevState.good + 1,
            neutral: prevState.neutral + 1,
            bad: prevState.bad + 1,
            
        }));
    };
    // handleIncrementN = () => {
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1,
    //     }));
    // };
    // handleIncrementB = () => {
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }));
    // };
    
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
        const { handleIncrementG, countPositiveFeedbackPercentage, countTotalFeedback } = this;
        return (
                <Section title="Please leave feedback">
                <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleIncrementG} />
                <p className={css.title}>Statistics</p>
                {   countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback" /> : 
                    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                }        
                </Section>           
        );
    }
    
}
