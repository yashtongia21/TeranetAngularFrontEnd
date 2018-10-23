import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../model/sign-up';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signup: SignUp;
  localObj: SignUp;
  constructor(private activatedRoute: ActivatedRoute,
    private signService: SignUpService,
    private router: Router) { }

  ngOnInit() {
    this.signup = new SignUp();
  }

  save() {

    this.signService.signUpUser(this.signup).subscribe(
      (data) => {
        this.localObj = data;
        alert("Successfully Signed in !!");

        alert("Welcome " + this.localObj.userName + " to Teranet Internet Service .. You will now be redirected to login page");
        this.router.navigateByUrl("/login");
      },
      (error) => {
        alert("Please fill all the details properly")
      }
    );
  }

  validate(signup: SignUp) {
    if (signup.userName == null || signup.password == null || signup.city == null || signup.emailId == null || signup.mobileNumber == null) {
      alert("Please fill all the details")
    }

  }

}
