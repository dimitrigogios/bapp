import  { Component, Input } from '@angular/core';

@Component ({
	selector:  'login-form',
	templateUrl: 'login.html'
})
export class Login {
	@Input() username: string;
	@Input() password: string;
	constructor() {
		
	}
}