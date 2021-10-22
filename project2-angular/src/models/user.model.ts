export class User {
    userId: number = 0;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    //passwordHash

    /**
     *
     */
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}