import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { PhoneNumberService } from 'src/app/services/phone-number.service';

@Component({
  selector: 'app-phonenumber-details',
  templateUrl: './phonenumber-details.component.html',
  styleUrls: ['./phonenumber-details.component.css']
})
export class PhonenumberDetailsComponent implements OnInit {

  phoneId: any;
  phonenumber!: PhoneNumber;

  constructor(private phonenumberService: PhoneNumberService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.data.subscribe(id => {
      this.phoneId = id;
      this.phonenumberService.find(this.phoneId).subscribe(data => {
        this.phonenumber = data;
      });
    });

    console.log("Showing details for " + this.phonenumber);
  }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    console.log("Formatted phone number: " + formattedNumber);

    return formattedNumber;
  }

}
