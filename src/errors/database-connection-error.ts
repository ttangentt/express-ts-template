import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error conencting to database';
    constructor(){
        super('Error connecting to db');
        //because we are extedning a built in class
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }
    serializeErrors(){
        return [
            {message:this.reason}
        ]
    }
}