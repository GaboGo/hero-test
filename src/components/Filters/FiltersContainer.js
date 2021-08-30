import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../actions/filtersActions';
import Tag from '../Tags/Tag';
import PropTypes from 'prop-types';

const FiltersContainer = ({ cardTags, isCard }) => {
    const [open, setOpen] = useState(false);
    const tags = useSelector((state) => state.cards.tags);
    const dispatch = useDispatch();

    const handleSelection = (e) => {
        dispatch(setFilters(e.target.id));
    };

    const renderTags = (items) =>
        items.map((tag, index) => (
            <Tag
                key={index}
                isCard={isCard}
                handleSelection={handleSelection}
                labelText={tag}
            ></Tag>
        ));

    return (
        <div className="filters-container">
            <ul
                className={
                    isCard ? 'filters-container--list-card' : 'filters-container--list'
                }
            >
                {renderTags(cardTags || tags)}
            </ul>
            <div className="filters-container--dropdown">
                <button
                    onClick={() => setOpen(!open)}
                    className="filters-container--dropdown-button"
                >
                    Dropdown
                </button>
                {open && (
                    <div className="filters-container--dropdown-content">
                        <ul>{renderTags(cardTags || tags)}</ul>
                    </div>
                )}
            </div>
        </div>
    );
};

FiltersContainer.propTypes = {
    cardTags: PropTypes.array,
    isCard: PropTypes.bool,
};

export default FiltersContainer;
