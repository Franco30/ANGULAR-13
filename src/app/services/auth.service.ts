import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { Register } from '../register/register'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  readonly baseURL = 'http://localhost:8000/auth/register';
  readonly backend = 'http://localhost:4000/api/register-user';

  endpoint: string = 'http://localhost:8000/auth/register';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient
  ) { }

  //   registerUser(register: Register): Observable<Register> {
  //     console.log(register);
  //   return this.http.post<Register>(this.backend, register, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   });
  // }

  registerUser(register: Register) {
    console.log(register);
    return this.http.post(this.baseURL, register, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map((response: any) => response.json()));
  }

  // registerUser(user: Register): Observable<any> {
  //   console.log(user);
  //   let api = `${this.baseURL}`;
  //   return this.http.post(api, user)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  // registerUser(user: Register){
  //   console.log(user);
  //   return this.http.post(this.baseURL, user, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }).pipe(map((response: any) => response.json()));
  // }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
