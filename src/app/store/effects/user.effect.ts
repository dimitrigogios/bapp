import 'rxjs';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { UserService } from '../../services/user.service'
import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, doLoginSuccess, doLoginError } from '../../store/actions/user.action'

@Injectable()
export class UserEffects {
    // Inject required services
    constructor(private actions$: Actions, private _userService: UserService) { }

    /*
     * The return action is automatically dispatch to the store by ngrx/effects
     */
    @Effect()
    doLogin$: Observable<Action> = this.actions$
        // Send the request when FETCH_RANDOM_DOG is dispatched
        .ofType(DO_LOGIN)
        .pipe(
            switchMap((action) => {

                const payload = (action as any).payload;

                return this._userService.userService(
                    payload.url_param,
                    payload.user
                );

            }),
            map((res) => {
                res.isLoggedIn = true;
                new doLoginSuccess(res);
                //console.log(res);
            })
        );
        /*
        map(action => action.payload), map(() => {
            
                // Request succeeed, we dispatch fetchRandomDogSuccess action with the retrieved imgUrl
                .map(imgUrl => new doLoginSuccess(imgUrl))
                // Something went wrong with the request
                .catch(err => Observable.of(new doLoginError(err)))
        })
        /*.mapTo(toPayload)
        // Send the request to the API
        .mergeMap((payload) => {
        })*/

}