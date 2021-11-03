import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';
import { User } from 'src/app/models/user.model';
import { PlanService } from 'src/app/services/plan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @Input() user!: User;
  userId: any;

  PlanList: Plan[] = [];
  monthlyBill!: number;
  
  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit(): void {
    this.planService.findPlansForUser(this.user.userId).subscribe(data => {
      this.PlanList = data;
      console.log(this.PlanList);
    });

    this.userService.getMonthlyBill(this.user.userId).subscribe(data => {
      this.monthlyBill = data;
      console.log(this.monthlyBill);
    });
  }

}
