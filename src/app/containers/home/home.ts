import { Observable } from 'rxjs'
import { Component } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { LoadingController, Loading } from 'ionic-angular';
import * as fromUser from '../../store/actions/user.action';

@Component({
	selector: 'home',
	templateUrl: 'home.html'
})
export class HomePage {
	user = {
		username: '',
		password: ''
	};
	loading: boolean;
	//dogImgUrl$: Observable<string>
	//isLoading$: Observable<boolean>
	// Used to display the loader
	//_loader: Loading
	/*
	* The store is injected in the constructor by angular
	* The store will then be used to retrieve data from the store and pass then to components
	* The store will also be used to dispatch action to the store on certain event
	* The State is the global state of the application. It is used by typescript help the developper
	*/
	constructor(private _store: Store<State>, private _loadingCtrl: LoadingController) {
		/*
		 * We are getting the imgUrl from the store
		 */
		// Get the "isLoading" boolean from the store
		/*this.isLoading$ = _store.select(state => state.dogs.isLoading)

		// Each time isLoading change, subscribe callback is called
		this.isLoading$.subscribe(isLoading => this._updateLoader(isLoading))*/
		//console.log(this._store.dispatch(new loginActions.getState()))
		//console.log(_store.select(appState => appState));
		this.loading = _store.select(state => state.heartbeat.loading);
		console.log(this.loading);
	}

	/*
	* Callback function called when the button is clicked
	*/
	login() {
		// Dispatch the "doLogin" action using the _store injected in the constructor
		this._store.dispatch(new fromUser.doLogin('login', this.user));
	}

	keyPress(event: KeyboardEvent) {
		if(event.keyCode === 13 && this.user.username !== '' && this.user.password) {
			this.login();
		}
	}
	/*
	_updateLoader(isLoading: boolean) {
		if (isLoading) {
		  // create a new loader and display it
		  this._loader = this._loadingCtrl.create();
		  this._loader.present()
		} else {
		  // hide the loader
		  if (this._loader) {
			this._loader.dismiss()
		  }
		}
	}*/
}