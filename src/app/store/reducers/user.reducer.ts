// Import Actions types from actions/dogs
import * as fromUser from '../actions/user.action';
import { User } from '../../models/user.model';
import { AppState } from '../../app.state';


let checkStorage = function() {
    console.log('sddd');
    return {};
}

/*
 * Defining our initialState
 * This state will be load by default when the application starts
 */
export const initialState: AppState = {
    loaded: false,
    loading: false,
    user: checkStorage()
}

export function reducer(state = initialState, action: fromUser.Action): AppState {

    /*
     * Every action has an action.type property
     */ 
    switch (action.type) {

        case fromUser.DO_LOGIN: {
            // As stated above we're creating a new state
            return {
                // ...state : copy every properties from state into the new object
                // We have to do this because the state is Immutable.
                ...state,
                loading: true // Request is beeing processed
            }
        }

        case fromUser.LOGIN_SUCCESS: {
            // As stated above we're creating a new state
            console.log('sdsd');
            return {
                // ...state : copy every properties from state into the new object
                // We have to do this because the state is Immutable.
                ...state,
                loading: true // Request is beeing processed
            }
        }

        /*
         * By default, if we don't recognize the action
         * the next state is the same as the current state
         */
        default:
            return state;
    }

    return state;

}