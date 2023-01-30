import css from '../Feedback.module.css'
import PropTypes from 'prop-types';

export const Section = (({ title, children }) => {
    return (
        <div>
            <p className={css.title}>{title}</p>
            {children}
        </div>
    )
});
Section.propTypes = {
    title: PropTypes.string.isRequired
}
