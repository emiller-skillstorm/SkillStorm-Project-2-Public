import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';
import { ActivatedRoute } from '@angular/router';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {

  planId: any;
  plan!: Plan;

  constructor(private planService: PlanService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.data.subscribe(id => {
      this.planId = id;
      this.planService.find(this.planId).subscribe(data => {
        this.plan = data;
      });
    });
  }
}
