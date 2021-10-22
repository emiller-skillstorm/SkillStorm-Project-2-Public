export class Device {
    deviceId: number = 0;
    brand: string = "";
    model: string = "";

    /**
     *
     */
    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }
}