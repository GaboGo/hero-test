import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../actions/filtersActions';
import Tag from '../Tags/Tag';

const FiltersContainer = () => {
    const tags = useSelector((state) => state.cards.tags);
    const dispatch = useDispatch();

    const handleSelection = (e) => {
        dispatch(setFilters(e.target.id));
    };

    const renderTags = () =>
        tags.map((tag, index) => (
            <Tag key={index} handleSelection={handleSelection} label={tag}></Tag>
        ));

    return renderTags();
};

export default FiltersContainer;
