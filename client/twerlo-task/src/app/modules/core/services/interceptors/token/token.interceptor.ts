import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy {
  subscribtions: Subscription[] = []; // to hold all subscriptions
  ngOnDestroy(): void {
    // unsubscribe to all subscribtions to prevent data leakage and bad performance
    this.subscribtions.forEach((subs) => subs.unsubscribe());
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    // clone req and append accept json content-type  to prevent cors problem
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        Accept: 'application/json',
      },
    });
    return next.handle(request);
  }
}
