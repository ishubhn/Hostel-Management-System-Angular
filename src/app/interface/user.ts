import { Address } from './address';

export interface User {
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: String;
    gender: String;
    dateOfBirth: String;
    password: String;
    address: Address;
}
