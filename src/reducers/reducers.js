import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import movingBallsReducer from './movingBallsReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    movingBalls: movingBallsReducer
});
