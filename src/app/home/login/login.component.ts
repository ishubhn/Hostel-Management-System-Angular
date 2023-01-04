import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

import { LoginUser } from './../../interface/login-user';
import { UserAuthService } from './../../service/user-auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	@ViewChild('f', { static: false })
	loginForm !: NgForm;
	subscription: any;

	private user: LoginUser = {
		username: "",
		password: ""
	}

	constructor(private authService: UserAuthService, private router: Router) { }

	onSubmit = (loginForm: NgForm) => {
		this.user.username = (this.loginForm.value.username).toLowerCase();
		this.user.password = this.loginForm.value.password;

		console.log(this.user);

		this.authService.loginUser(this.user).subscribe(
			(res) => {
				console.log("Login Successful");
				this.wait(1500);
				this.router.navigate(['/user'])
			},
			(err) => {
				console.error(err);
			}
		)
	};

	// takes time to store data in localStorage, so added timer
	wait = (delay: number) => {
		this.subscription = timer(delay).subscribe(() => {
			this.router.navigate(['/user']);
		})
	};
}
