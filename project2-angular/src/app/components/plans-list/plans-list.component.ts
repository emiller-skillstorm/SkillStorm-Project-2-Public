import { Component, Input, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {
  
  PlanList: Plan[] = [];
  @Input() user!: User;

  constructor(private planService: PlanService, private router: Router) { }
  
  //Returns All Plans
  ngOnInit(): void {
    this.planService.findPlansForUser(this.user.userId).subscribe(data => 
      {
        this.PlanList = data;
        console.log(this.PlanList);
      });
  }

}
