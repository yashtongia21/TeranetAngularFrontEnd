import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../model/sign-up';
import { SignUpService } from '../../services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword: string;
  forgotObj: SignUp;
  emailForgot: string;
  mobileForgot: string
  constructor(private signService: SignUpService, private router: Router) { }

  ngOnInit() {
  }

  save() {

    this.signService.forgotPassword(this.emailForgot, this.mobileForgot).subscribe(
      (data) => {
        this.forgotObj = data;
        alert("Your Password is " + this.forgotObj.password + " Use this password to login ! ");
        this.router.navigateByUrl("/login");
      },
      (error) => {
        alert("Invalid Request! ");
      }
    );
  }
}
