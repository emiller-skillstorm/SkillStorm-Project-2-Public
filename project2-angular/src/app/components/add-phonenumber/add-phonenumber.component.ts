import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { PlanService } from 'src/app/services/plan.service';
import { PhoneNumberService } from 'src/app/services/phone-number.service';
import { ActivatedRoute } from '@angular/router';
import { AvailablePhonenumber } from 'src/app/models/available-phonenumber.model';

@Component({
  selector: 'app-add-phonenumber',
  templateUrl: './add-phonenumber.component.html',
  styleUrls: ['./add-phonenumber.component.css']
})
export class AddPhonenumberComponent implements OnInit {

  user!: User;
  userId: any;

  SelectablePhoneNumbers!: AvailablePhonenumber[];
  currentSelection!: AvailablePhonenumber;

  showThisComponent!: boolean;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute, private phonenumberService: PhoneNumberService) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.userId = id;
      this.userService.find(this.userId).subscribe(data => {
        this.user = data;
      });
    });

    this.phonenumberService.findAllAvailablePhoneNumbers().subscribe(data => {
      this.SelectablePhoneNumbers = data;
      console.log(this.SelectablePhoneNumbers);
    })
  }

  selectChangeHandler(event: any){
    this.currentSelection = event.target.value;
    console.log(this.currentSelection);
  }
  
  addPhoneNumber() {
    this.phonenumberService.addPhoneNumberToUser(this.userId, this.currentSelection.id);
    this.showThisComponent = false;
  }

}
