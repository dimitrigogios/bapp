import { Injectable } from '@angular/core';
//import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

const API_URL = 'http://app.bontii.dk/v1/user/';

@Injectable()
export class UserService {

	/*private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		//console.error(errMsg);
		return Observable.throw(errMsg);
	}*/

    constructor(private _http: HttpClient) { }

    userService(url_param: string, _user: any) {
        return this._http.post<User>(`${API_URL}`+url_param, _user);
        	
        	/*.subscribe(data => {
        		console.log(data);
				//console.log(data.accessToken, data.accessExpiration);
			});
        /*let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(`${API_URL}`+url_param, _user, options)
            .map(this.extractData)
            .map(this.handleError)*/
    }
}