/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '.';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('movingBallsActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (moveCircleXCoordinate)', () => {
        const expectedActions = [
            {
                type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
                dx: 467,
                id: 3
            }
        ];

        store.dispatch(Actions.moveCircleXCoordinate(467, 3));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});
