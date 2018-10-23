import { Component, OnInit } from '@angular/core';
import { Plan } from '../../model/plan';

import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../../services/plan.service';


@Component({
  selector: 'app-display-plans',
  templateUrl: './display-plans.component.html',
  styleUrls: ['./display-plans.component.css']
})
export class DisplayPlansComponent implements OnInit {

  plans: Plan[];
  planOffers:string;
  usercity:string;

  public doughnutChartLabels:string[] = ['Running', 'Stop', 'Idle'];
  public doughnutChartData:number[] = [1, 4, 5];
  public doughnutChartType:string = 'doughnut';
  public colors: any[] = [{ backgroundColor: ["#008000", "#FF0000", "#FFA500"] }];

  public chartOptions: any = {
    pieceLabel: {
      render: function (args) {
        const label = args.label,
              value = args.value;
        return label + ': ' + value;
      }
    }
  }

  constructor(private planService: PlanService, private activatedRoute: ActivatedRoute) { 
    this.planOffers="/assets/images/offerImg.png";
  }

  filterByCity(){

  }

  ngOnInit() {

    
    

    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let city=params['city'];
        if(city){
          this.planService.searchPlans(city).subscribe(
            (data) => this.plans=data
          );
        }else{
          this.planService.getAllPlans().subscribe(
            (data) => this.plans = data
          );
        }
      }
    );
  }

}
