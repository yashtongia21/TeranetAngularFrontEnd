import { Component, OnInit } from '@angular/core';
import { Plan } from '../../model/plan';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';



@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  plan:Plan;
  constructor(
    private activatedRoute:ActivatedRoute,
    private planService:PlanService,
    private router:Router
  ) { }

  ngOnInit() {
    this.plan=new Plan();
  }
  save(){

    this.planService.addPlan(this.plan).subscribe(
      (data)=>{
        this.router.navigateByUrl("listPlans");
      },
      (error)=>{alert("Cannot add plan");}  
    );
  }

}
