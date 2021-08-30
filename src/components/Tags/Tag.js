/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ labelText, handleSelection, isCard }) => {
    return (
        <li className="filters-container--list-item">
            <input
                tabIndex="0"
                className="filters-container--list-input"
                id={labelText}
                type="checkbox"
                onClick={(event) => handleSelection(event)}
                checked={isCard}
            />
            <label className="filters-container--list-label" htmlFor={labelText}>
                {isCard ? labelText : labelText.toUpperCase()}
            </label>
        </li>
    );
};

Tag.propTypes = {
    labelText: PropTypes.string.isRequired,
    handleSelection: PropTypes.func,
    isCard: PropTypes.bool,
};

Tag.defaultProps = {
    handleSelection: () => {},
};

export default Tag;
