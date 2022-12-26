import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUser } from './../interface/login-user';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

 	private REST_SERVICE_URL = environment.restServiceURL;

    constructor(private httpc: HttpClient) { }

	loginUser = (user: LoginUser) => {
		return this.httpc.post<LoginUser>(`${this.REST_SERVICE_URL}/users/login`, user);
	}
}
