export class AppError{
    constructor(public error: any){
        console.error('AppError log error: '+ error);
    };
}