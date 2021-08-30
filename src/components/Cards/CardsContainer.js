import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCards } from '../../actions/cardsActions';
import Card from './Card';

const CardsContainer = () => {
    const cards = useSelector((state) => state.cards?.list);
    const filters = useSelector((state) => state.filters?.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCards(filters));
    }, [dispatch, filters]);

    const renderCards = () =>
        cards?.map((card) => <Card key={card.id} data={card}></Card>);

    return (
        <>
            {cards.length > 0 && <div className="cards-container">{renderCards()}</div>}
            {cards.length == 0 && (
                <h1 className="cards-container--message">
                    No cards with the selected filters
                </h1>
            )}
        </>
    );
};

export default CardsContainer;
