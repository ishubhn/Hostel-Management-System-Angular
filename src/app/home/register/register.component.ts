import { Router } from '@angular/router';
import { UserAuthService } from './../../service/user-auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './../../interface/user';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	@ViewChild('f', { static: false })
	registerForm !: NgForm;

	model: NgbDateStruct;
	errorMessage: any;
	equalPassword: boolean = true;
	isUserRegisterSuccess: boolean = false;

	faCalendar = faCalendar;

	user: User = {
		firstName: '',
		lastName: '',
		emailId: '',
		phoneNumber: '',
		gender: '',
		dateOfBirth: '',
		password: '',
		permanentAddress: {
			blockNo: '',
			address: '',
			landmark: '',
			cityName: '',
			state: '',
			country: ''
		}
	};

	constructor(private service: UserAuthService, private router: Router) {

	}

	// parse date as per dd/mm/yyyy
	parseDate(dateBirth: any) {
		let day = dateBirth.day;
		let month = dateBirth.month;
		let year = dateBirth.year;
		let finalDate: String;

		if (month < 10 && day < 10) {
			finalDate = `0${day}/0${month}/${year}`;
		} else if (month < 10 && day > 9) {
			finalDate = `${day}/0${month}/${year}`;
		} else if (day < 10 && month > 9) {
			finalDate = `0${day}/${month}/${year}`;
		} else {
			finalDate = `${day}/${month}/${year}`;
		}

		return finalDate;
	}

	registerUser = (registerForm: NgForm) => {
		this.user.firstName = this.registerForm.value.firstName;
		this.user.lastName = this.registerForm.value.lastName;
		this.user.emailId = (this.registerForm.value.email).toLowerCase();
		this.user.phoneNumber = this.registerForm.value.phoneNumber;
		this.user.gender = this.registerForm.value.radioGender;
		this.user.dateOfBirth = this.parseDate(this.registerForm.value.dateOfBirth);

		// console.log(registerForm.value);

		if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
			console.log("Password Matched");
			this.user.password = this.registerForm.value.password;
			console.log(this.user);

			// Service API call
			this.service.registerUser(this.user).subscribe(
				res => {
					console.log(res);
					this.isUserRegisterSuccess = true;
					this.router.navigate(['/login']);
				},
				(err) => {
					this.errorMessage = err.error.message;
					console.error(this.errorMessage);
					this.isUserRegisterSuccess = false;
				}
			)
			this.registerForm.reset();
		} 
		else {
			this.equalPassword = false;
			console.error("Password Mismatch");
		}

	}



}
