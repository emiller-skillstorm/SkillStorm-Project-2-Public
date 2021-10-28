import { Component, Input, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {
  
  PlanList: Plan[] = [];
  user!: User;
  userId: any;


  constructor(private planService: PlanService, private activeRoute: ActivatedRoute) { }
  
  //Returns All Plans
  ngOnInit(): void {
    this.activeRoute.data.subscribe(id =>  {
      this.userId = id;
    
    this.planService.findPlansForUser(this.userId).subscribe(data => 
      {
        this.PlanList = data;
        console.log(this.PlanList);
      });
    });
  }

}
