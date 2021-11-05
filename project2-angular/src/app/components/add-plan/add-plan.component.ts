import { Component, Input, OnInit } from '@angular/core';
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
  @Input() user!: User;
  userId: any;

  SelectablePlans!: AvailablePlan[];
  currentSelection!: AvailablePlan;

  showThisComponent!: boolean;

  constructor(private userService: UserService, private planService: PlanService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.data.subscribe(id => {
    this.userId = id;
    this.userService.find(this.userId).subscribe(data => {
      this.user = data;
    });
  });

    console.log("Incoming user to AddPlan: " + this.user);

    this.planService.findAllAvailablePlans().subscribe(data => {
      this.SelectablePlans = data;
      console.log("And this user's plan options: " + this.SelectablePlans);
    })
  }

  selectChangeHandler(event: any){
    this.currentSelection = event.target.value;
    console.log(this.currentSelection);
  }

  addPlanToUser() {
    console.log(this.userId + " " + this.currentSelection)
    this.planService.addPlanToUser(this.userId, this.currentSelection.id);
  }

}
