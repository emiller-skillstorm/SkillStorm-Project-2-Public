import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvailablePlan } from 'src/app/models/available-plan.model';
import { User } from 'src/app/models/user.model';
import { PlanService } from 'src/app/services/plan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
  user!: User;
  userId: any;

  SelectablePlans: AvailablePlan[] = [];
  currentSelection: AvailablePlan = new AvailablePlan();

  constructor(private userService: UserService, private planService: PlanService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.userId = id;
      this.userService.find(this.userId).subscribe(data => {
        this.user = data;
      });
    });

    this.planService.findAllAvailablePlans().subscribe(data => {
      this.SelectablePlans = data;
      console.log(this.SelectablePlans);
    })
  }

  update() {
    this.planService.addPlanToUser(this.userId, this.currentSelection.id);
  }

}
