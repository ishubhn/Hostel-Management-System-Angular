import { Address } from './address';

export interface User {
    firstName: String;
    lastName: String;
    emailId: String;
    phoneNumber: String;
    gender: String;
    dateOfBirth: String;
    password: String;
    permanentAddress: Address;
}
