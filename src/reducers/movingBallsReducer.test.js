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

    // it("should update property x in circles array by adding the value passed through the action", () => {
    //     const action = { 
    //         type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
    //         dx: 4,
    //         id: 3
    //     }
    //     const initState = {
    //         ...initialState, 
    //         circles: [{dx: 4, id: 3, x: 1}]
    //     }
    //     const state = {
    //         ...initialState, 
    //         circles: [{dx: 4, id: 3, x: 1}]
    //     }
    //     expect(reducer(initState, action)).toEqual(state);
    // });

    // it("should update property x in circles array by adding the value passed through the action", () => {
    //     const action = { 
    //         type: actionTypes.MOVE_CIRCLE_Y_COORDINATE,
    //         dy: 3,
    //         id: 1
    //     }
    //     const initState = {
    //         ...initialState, 
    //         circles: [{dy: 3, id: 1, y: 1}]
    //     }
    //     const state = {
    //         ...initialState, 
    //         circles: [{dy: 3, id: 1, y: 4}]
    //     }
    //     expect(reducer(initState, action)).toEqual(state);
    // });

    // it("should update numberOfBalls with the value passed through the action", () => {
    //     const action = { 
    //         type: actionTypes.CHANGE_DIRECTION_OF_X_MOVE,
    //         id: 2
    //     }
    //     const initState = {
    //         ...initialState, 
    //         circles: [{dx: 3, id: 2, y: 1}]
    //     }
    //     const state = {
    //         ...initialState, 
    //         circles: [{dx: -3, id: 2, y: 1}]
    //     }
    //     expect(reducer(initState, action)).toEqual(state);
    // });

    it("should update circles array with the array passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_CIRCLES_ARRAY,
            arr: [{a: 3, b: 6}]
        }
        const initState = {
            ...initialState, 
            circles: [{a: 6, b: 4}]
        }
        const state = {
            ...initialState, 
            circles: [{a: 3, b: 6}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update numberOfBalls with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_NUMBERS_OF_BALLS,
            num: 36
        }
        const initState = {
            ...initialState, 
            numberOfBalls: 20
        }
        const state = {
            ...initialState, 
            numberOfBalls: 36
        }
        expect(reducer(initState, action)).toEqual(state);
    });

});
