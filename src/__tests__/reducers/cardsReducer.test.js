import '@testing-library/jest-dom/extend-expect';
import { populateTags, getFilteredCards } from '../../reducers/cardsReducer';
import { cards } from '../../_mocks_/cards';

describe('Cards reducer', () => {
    test('populate filters array', () => {
        expect(populateTags(cards).length).toBeGreaterThan(0);
    });

    test('filter cards based on filters array', () => {
        expect(getFilteredCards(cards, ['UX']).length).toBe(1);
    });
});
