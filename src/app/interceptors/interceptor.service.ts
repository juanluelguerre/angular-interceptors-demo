import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log('Running interceptor...');

    const headers = new HttpHeaders({
      'token-usuario': 'SOME-HEADER-ABC-123...'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError(err => this.manejarError)
    );
  }


  manejarError(error: HttpErrorResponse) {
    console.log('Error found !');
    console.warn(`ERROR: ${error}`);

    return throwError(`Error Personalizado: ${error.message}`);
  }

}
