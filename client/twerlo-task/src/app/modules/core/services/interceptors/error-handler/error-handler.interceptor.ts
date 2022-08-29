import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * This Class is interceptor that is used to intercept response and handling error according to status code
 * @export
 * @class ErrorHandlerInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    return next.handle(request).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse): any {
    let errorMessage = error.error.message;
    window.alert(`error - ${errorMessage}`);
    return throwError(errorMessage);
  }
}
