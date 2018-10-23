import { Injectable } from '@angular/core';
import { SignUp } from '../model/sign-up';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  signup: SignUp;
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:7070/signup";
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  signUpUser(signup: SignUp): Observable<SignUp> {
    return this.http.post(this.baseUrl, JSON.stringify(signup), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );


  }

  forgotPassword(emailForgot: string, mobileForgot: string): Observable<SignUp> {
    return this.http.get(this.baseUrl + "/" + emailForgot + "/" + mobileForgot).pipe(
      map(data => data.json())
    );
  }

  retrieveData(email: String): Observable<SignUp> {
    return this.http.get(this.baseUrl + "/" + email).pipe(
      map(data => data.json())
    );
  }


}

