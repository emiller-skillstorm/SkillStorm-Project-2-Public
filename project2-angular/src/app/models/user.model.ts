import { Device } from "./device.model";
import { PhoneNumber } from "./phonenumber.model";
import { Plan } from "./plan.model";

export class User {
    userId: number = 0;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    passHash: string = "";
    devices: Device[] = [];
    phoneNumber: PhoneNumber[] = [];
    plans: Plan[] = [];

    /**
     *
     */
    constructor() { }
}