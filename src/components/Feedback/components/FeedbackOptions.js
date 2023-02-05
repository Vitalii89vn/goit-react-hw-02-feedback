import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {
                options.map((option, idx) => (
                    <button
                        type="button"
                        key={idx}
                        className={css.btn_feedback}
                        onClick={() => onLeaveFeedback(option)}>{option[0].toUpperCase() + option.slice(1)}</button>))}
        </div>
    )
        
};
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
 }
