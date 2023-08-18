import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    
    return next.handle(req.clone()).pipe(
      tap(
        (ev) => {},
        (err) => {
          console.log(err.error.detail);
        }
      )
    )
  }


}
