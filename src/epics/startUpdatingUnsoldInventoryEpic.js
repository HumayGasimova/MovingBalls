import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/empty';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function startUpdatingUnsoldInventoryEpic(action$, state$) {
    return action$
        .ofType(actionTypes.START_UPDATING_UNSOLD_INVENTORY)
        .mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    if(state$.value.business.unsoldInventory > 0){
                        return Observable.of(
                                Actions.updateUnsoldInventory(),
                                Actions.updateFunds(state$.value.business.paperclipPrice)
                            )
                        } else{
                            return Observable.empty()
                        }
                }),
                // takeUntil(action$.ofType(actionTypes.STOP_SUBTRACTING_Q_OPS))
            )
           
        
        })       
}

export default startUpdatingUnsoldInventoryEpic;