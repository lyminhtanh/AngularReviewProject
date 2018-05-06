import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler {
    handleError(error){
        alert('global error handler ');
        console.error('#global#: '+JSON.stringify(error));
    }
}