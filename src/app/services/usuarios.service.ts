import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '1');
    params.append('nombre', 'Juan Luis');

    // Replace headers using Interceptors !!! -> Middleware in DotNet !!!
    // const headers = new HttpHeaders({
    //   'token-usuario': 'SOME-HEADER-ABC-123...'
    // });

    // Correct url:
    // return this.http.get(`https://reqres.in/api/user`, {

    // Error url to show errors (like demo/samples)
    return this.http.get(`https://reqres.in-aaaaaaaaaa/api/user`, {

      // params: params --> No need for Ecmacs Script 6 and upper
      params,

      // headers: headers  --> No need for Ecmacs Script 6 and upper
      // headers
    }).pipe(

      map(resp => resp['data']),

      // Move it to interceptor Service
      // catchError(err => this.manejarError) 

    );
  }


}
