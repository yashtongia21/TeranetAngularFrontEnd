import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../model/login';
import { SignUp } from '../model/sign-up';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:7070/login";
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  loginUser(login: Login): Observable<SignUp> {
    return this.http.post(this.baseUrl, JSON.stringify(login), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  deleteUser(email: string): Observable<Response> {

    return this.http.delete(this.baseUrl + "/" + email);
  }

  getLoggedUser(email: string): Observable<Login> {
    return this.http.get(this.baseUrl + "/" + email).pipe(
      map(data => data.json())
    );
  }
}
