import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../actions/filtersActions';

const Tag = ({ label, handleSelection }) => {
    return (
        <>
            <input
                id={label}
                type="checkbox"
                onClick={(event) => handleSelection(event)}
            />
            <label> {label}</label>
        </>
    );
};

export default Tag;
