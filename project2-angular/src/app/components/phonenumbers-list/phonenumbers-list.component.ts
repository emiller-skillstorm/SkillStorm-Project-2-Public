import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { PhoneNumberService } from 'src/app/services/phone-number.service';

@Component({
  selector: 'app-phonenumbers',
  templateUrl: './phonenumbers-list.component.html',
  styleUrls: ['./phonenumbers-list.component.css']
})
export class PhonenumbersListComponent implements OnInit {

  PhoneNumberList: PhoneNumber[] = [];
  DeviceList: Device[] = [];

  @Input() user!: User;
  userId: any;

  showPhoneDetails: boolean = false;
  showRouterOutlet: boolean = false;

  constructor(private phoneNumberService: PhoneNumberService, private deviceService: DeviceService, private router: Router, private activeRoute: ActivatedRoute) { }

  // Display the list of phone numbers for the current user
  ngOnInit(): void {
    console.log("Showing phone numbers for user " + this.user.userId);

    this.phoneNumberService.findPhoneNumbersForUser(this.user.userId).subscribe(data => 
      {
        this.PhoneNumberList = data;
        console.log(this.PhoneNumberList);
      });

      this.deviceService.findDevicesForUser(this.user.userId).subscribe(data => 
        {
          this.DeviceList = data;
          console.log(this.DeviceList);
        });

        this.showRouterOutlet = false;
  }

  checkIfPhoneNumberIsUsed(phone: PhoneNumber): string{
      for(let d of this.DeviceList){
        if(d.phoneNumber){
          if(d.phoneNumber.id === phone.id){
            phone.isInUse = true;
            return 'Yes';
          }
        }
      }
      return 'No';
    }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    //console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    //console.log("Formatted phone number: " + formattedNumber);

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

  goToAddPhoneNumber() {
    //this.showAddButton = false;
    this.showRouterOutlet = false;
    
    let route = this.router.config.find(r => r.path === 'add-phonenumber/:id');

    if (route) {
      route.data = this.user;
      this.router.navigateByUrl(`/add-phonenumber/${this.user.userId}`);
    }
    
    this.showRouterOutlet = true;
  }

  remove(phonenumber: PhoneNumber) {
    //implement
  }
}
