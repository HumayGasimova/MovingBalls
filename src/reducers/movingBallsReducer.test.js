/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './movingBallsReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './movingBallsReducer'


describe('movingBallsReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    it("should update property x in circles array by adding the value passed through the action", () => {
        const action = { 
            type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
            dx: 4,
            id: 3
        }
        const initState = {
            ...initialState, 
            circles: [{id: 1, x: 2}, {id: 2, x: 1}, {id: 3, x: 1}]
        }
        const state = {
            ...initialState, 
            circles: [{id: 1, x: 2}, {id: 2, x: 1}, {id: 3, x: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

});
