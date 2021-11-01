import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  
  PlanList: Plan[] = [];
  @Input() user!: User;
  userId: any;

  @Output() hideList = new EventEmitter<boolean>();
  showPlanDetails: boolean = false;

  constructor(private planService: PlanService, private router: Router,private activeRoute: ActivatedRoute) { }
  
  //Returns All Plans
  ngOnInit(): void {
  //   this.activeRoute.data.subscribe(id =>  {
  //     this.userId = id;
    console.log("Showing plans for user " + this.user.userId);

    this.planService.findPlansForUser(this.user.userId).subscribe(data => 
      {
        this.PlanList = data;
        console.log(this.PlanList);
      });
    // });
  }
  
  details(plan: Plan){
    let route = this.router.config.find(r => r.path === 'plan-details/:id');

    if (route) {
      route.data = plan;
      this.router.navigateByUrl(`/plan-details/${plan.planId}`);
    }

    this.showPlanDetails = true;
  }
}
