import css from '../Feedback.module.css'
import PropTypes from 'prop-types';

export const Statistics = (({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
            <li className={css.feedbackItem}>Good: { good }</li>
            <li className={css.feedbackItem}>Neutral: { neutral }</li>
            <li className={css.feedbackItem}>Bad: { bad }</li>
            <li className={css.feedbackItem}>Total: {total}</li>
            <li className={css.feedbackItem}>Positive feedback: {positivePercentage || 0 }% </li>
        </ul>
    )
})
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}