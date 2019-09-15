import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function addProjectsEpic(action$) { 
    return action$
        .ofType(actionTypes.ADD_PROJECT)
        .mergeMap(action => {
            return Observable.of(
            //   Actions.
            ) 
        })
}

export default addProjectsEpic;