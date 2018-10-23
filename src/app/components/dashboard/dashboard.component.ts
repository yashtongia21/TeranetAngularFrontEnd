import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title : string;
  logoUrl: string;
  constructor() {
    this.title="Teranet ISP";
    this.logoUrl="/assets/images/teranetLogo.png";
   }

  ngOnInit() {
  }

}
