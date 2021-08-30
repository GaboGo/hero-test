import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardsContainer from './components/Cards/CardsContainer';
import FiltersContainer from './components/Filters/FiltersContainer';
import { fetchCards } from './actions/cardsActions';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <div data-testid="APP-TEST-ID" className="App">
            <FiltersContainer />
            <CardsContainer />
        </div>
    );
}
