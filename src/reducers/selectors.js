import { createSelector } from 'reselect';

const getCircles = (state) => state.movingBalls.circles;

export const getCirclesState = createSelector(
    [getCircles],
    (x) => x
);

const getNumberOfBalls = (state) => state.movingBalls.numberOfBalls;

export const getNumberOfBallsState = createSelector(
    [getNumberOfBalls],
    (x) => x
);


