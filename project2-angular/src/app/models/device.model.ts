import { PhoneNumber } from "./phonenumber.model";

export class Device {
    deviceId: number = 0;
    brand: string = "";
    model: string = "";
    phoneNumber: PhoneNumber = new PhoneNumber();
    userId: number = 0;

    /**
     *
     */
    constructor() { }
}