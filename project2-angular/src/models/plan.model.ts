export class Plan {
    planId: number = 0;
    name: string = "";
    price: number = 0;
    deviceLimit: number = 0;
    dataLimit: number = 0;

    /**
     *
     */
    constructor(name: string, price: number, deviceLimit: number, dataLimit: number) {
        this.name = name;
        this.price = price;
        this.deviceLimit = deviceLimit;
        this.dataLimit = dataLimit;
        
    }
}