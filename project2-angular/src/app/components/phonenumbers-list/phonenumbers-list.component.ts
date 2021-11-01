import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { User } from 'src/app/models/user.model';
import { PhoneNumberService } from 'src/app/services/phone-number.service';

@Component({
  selector: 'app-phonenumbers',
  templateUrl: './phonenumbers-list.component.html',
  styleUrls: ['./phonenumbers-list.component.css']
})
export class PhonenumbersListComponent implements OnInit {

  PhoneNumberList: PhoneNumber[] = [];

  @Input() user!: User;
  userId: any;

  showPhoneDetails: boolean = false;

  constructor(private phoneNumberService: PhoneNumberService, private router: Router, private activeRoute: ActivatedRoute) { }

  // Display the list of phone numbers for the current user
  ngOnInit(): void {
    // this.activeRoute.data.subscribe(id =>  {
    //   this.userId = id;
    console.log("Showing phone numbers for user " + this.user.userId);

    this.phoneNumberService.findPhoneNumbersForUser(this.user.userId).subscribe(data => 
      {
        this.PhoneNumberList = data;
        console.log(this.PhoneNumberList);
      });
   // });
  }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    console.log("Formatted phone number: " + formattedNumber);

    return formattedNumber;
  }

  details(phoneNumber: PhoneNumber): void {
    let route = this.router.config.find(r => r.path === 'phonenumber-details/:id');

    if (route) {
      route.data = phoneNumber;
      this.router.navigateByUrl(`/phonenumber-details/${phoneNumber.id}`);
    }

    this.showPhoneDetails = true;
  }
}
