import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUp } from '../../model/sign-up';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login: Login;
  userDetails: SignUp;
  constructor(private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.login = new Login();
  }

  save() {
    this.loginService.loginUser(this.login).subscribe(
      (data) => {
        this.userDetails = data;
        alert("Successfully logged in !! ")
        this.router.navigateByUrl("/dashboard/" + this.userDetails.emailId);
      },
      (error) => {
        alert("The Username and the password do not match")
      }
    );
  }
}
