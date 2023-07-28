import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable()
export class InterceptorProvider implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        this.spinnerService.show();
        
        return next.handle(request).pipe(
            map(resp => {
                if (resp instanceof HttpResponse) {
                    this.spinnerService.hide();
                }
                return resp;
            })
        );
    }

}

