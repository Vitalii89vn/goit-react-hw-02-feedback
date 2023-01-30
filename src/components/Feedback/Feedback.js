import { Component } from "react";
import { Notification } from "./components/Notification";
import { Statistics } from "./components/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions";
import { Section } from "./components/Section";
import PropTypes from 'prop-types';
import css from "./Feedback.module.css"

export class Feedback extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    }
    state = {
        good: this.props.value,
        neutral: this.props.value,
        bad: this.props.value,
    }
    
    handleIncrementG = () => {
        this.setState(prevState => ({
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
        }));
    };
    handleIncrementN = () => {
         this.setState(prevState => ({
       good: prevState.good + 1 
        }));
       }
    
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
