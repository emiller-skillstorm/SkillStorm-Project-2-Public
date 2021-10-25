import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../app/services/plan.service';
import { Plan } from '../../app/models/plan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {
  
  PlanList: Plan[] = [];

  constructor(private planService: PlanService, private router: Router) { }


  //Returns All Plans
  ngOnInit(): void {
    this.planService.findAll().subscribe(data => 
      {
        this.PlanList = data;
        console.log(this.PlanList);
      });
  }

}
