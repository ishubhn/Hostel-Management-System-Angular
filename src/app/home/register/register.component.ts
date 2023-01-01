import { Component, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './../../interface/user';
import { Address } from '../../interface/address';
import { JsonPipe } from '@angular/common';
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
	equalPassword: boolean = true;
	faCalendar = faCalendar;

	user: User = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		gender: '',
		dateOfBirth: '',
		password: '',
		address: ''
	};

	constructor() { }

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
		this.user.email = (this.registerForm.value.email).toLowerCase();
		this.user.phoneNumber = this.registerForm.value.phoneNumber;
		this.user.gender = this.registerForm.value.gender;
		this.user.dateOfBirth = this.parseDate(this.registerForm.value.dateOfBirth);

		console.log(registerForm);
		
	}



}
