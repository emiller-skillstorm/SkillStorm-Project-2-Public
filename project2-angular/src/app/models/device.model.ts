import { PhoneNumber } from "./phonenumber.model";

export class Device {
    deviceId: number = 0;
    brand: string = "";
    model: string = "";
    phoneNumber!: PhoneNumber;

    /**
     *
     */
    constructor(brand: string, model: string, phoneNumber: PhoneNumber) {
        this.brand = brand;
        this.model = model;
        this.phoneNumber = phoneNumber;
    }
}