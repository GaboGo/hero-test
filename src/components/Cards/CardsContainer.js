import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCards } from '../../actions/cardsActions';
import Card from './Card';

const CardsContainer = () => {
    const cards = useSelector((state) => state.cards.list);
    const filters = useSelector((state) => state.filters.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCards(filters));
    }, [filters]);

    const renderCards = () =>
        cards.map((card) => <Card key={card.id} data={card}></Card>);

    return renderCards();
};

export default CardsContainer;
