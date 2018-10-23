import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { PlanFormComponent } from './components/plan-form/plan-form.component';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';
import { FeedbackformComponent } from './components/feedbackform/feedbackform.component';
import { FeedbackpageComponent } from './components/feedbackpage/feedbackpage.component';
import { DisplayPlansComponent } from './components/display-plans/display-plans.component';

const paths: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignUpFormComponent },
  { path: "", component: HomeComponent },
  { path: 'listPlans', component: DisplayPlansComponent },
  { path: 'planForm', component: PlanFormComponent },
  {path:'viewPlan/:id',component:PlanDetailsComponent},
  { path: "forgotPass", component: ForgotPasswordComponent},
  { path: "dashboard/:email", component: DashboardComponent },
  { path: 'feedback-form', component: FeedbackformComponent },
  { path: 'successful/:id', component: FeedbackpageComponent }
];
@NgModule({
  declarations: [

    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    DisplayPlansComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HomeComponent,
    PlanFormComponent,
    PlanDetailsComponent,
    FeedbackformComponent,
    FeedbackpageComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
