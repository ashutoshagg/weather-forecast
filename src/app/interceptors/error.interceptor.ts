import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SpinnerService } from '../shared/services/spinner.service';

@Injectable()
export class ErrorInterceptorProvider implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService,
        private toastrService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1), //retry logic
                catchError((error: HttpErrorResponse) => {
                    if (error.error instanceof ErrorEvent) {
                        //client side error
                        console.log("client side error ", error)
                    }
                    else {
                        //server side error
                        this.toastrService.error(error.error.message);
                        if (error.status == 0) {
                           this.toastrService.error("Either server is not working or there is some problem with your internet connection. Please try after sometime");
                        }
                    }
                    this.spinnerService.hide();
                    return throwError(error.error);
                })
            )
    }
}