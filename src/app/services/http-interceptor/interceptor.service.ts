import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ErrorService } from '../data/error.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(public er: ErrorService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    
    return next.handle(req.clone()).pipe(
      tap(
        (ev) => {},
        (err) => {
          console.log(err);
          if (err.status == 500) {
            this.er.errorsIn$.next(this.er.getCount() + ".  " + err.error.detail)
          }
        }
      )
    )
  }


}
