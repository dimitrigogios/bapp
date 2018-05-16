import { AppPayload } from '../app.response';
import { Action } from '@ngrx/store';
import { User } from "../../models/user.model";

export const DO_LOGIN = "[AppPayload] DO_LOGIN";
export const LOGIN_SUCCESS = "[AppPayload] LOGIN_SUCCESS";
export const LOGIN_ERROR = "[AppPayload] LOGIN_ERROR";

/*
* By convention, the payload property contains every parameter sent with actions
*/
export class doLogin implements Action {

	readonly type = DO_LOGIN;
  	payload: AppPayload;
	// We define the payload property
	//payload: { url_param: string, user: any };

	constructor(url_param: string, user: any) {
		this.payload = { url_param, user };
	}
}

export class doLoginSuccess implements Action {

    // We define the payload property
    readonly type = LOGIN_SUCCESS;
    payload: User;


    constructor(appPayload: User) {
        this.payload = appPayload;
    }
}

export class doLoginError implements Action {

    payload: { error: any }
    readonly type = LOGIN_ERROR;
    /*constructor(error: any) {
        this.payload = { error }
    }*/
}

/*
* Type Action contains every possible action of an action file
* This will be useful with typechecking later on ( in reducers ).
*/
export type Action = doLogin | doLoginSuccess | doLoginError;
