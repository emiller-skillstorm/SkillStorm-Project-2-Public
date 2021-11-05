import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { DeviceService } from 'src/app/services/device.service';
import { PhoneNumberService } from 'src/app/services/phone-number.service';

@Component({
  selector: 'app-add-phonenumber-to-device',
  templateUrl: './add-phonenumber-to-device.component.html',
  styleUrls: ['./add-phonenumber-to-device.component.css']
})
export class AddPhonenumberToDeviceComponent implements OnInit {

  @Input() device!: Device;
  deviceId: any;

  SelectablePhoneNumbers!: PhoneNumber[];
  currentSelection!: PhoneNumber;
  
  constructor(private deviceService: DeviceService, private phoneService: PhoneNumberService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activeRoute.data.subscribe(id => {
    //   this.deviceId = id;
    //   this.deviceService.find(this.deviceId).subscribe(data => {
    //     this.device = data;
    //     console.log("Device sent in to have a phone number added: " + this.device);
    //   });
    // });

    console.log("Ready to add a phone number to device " + this.device);

    this.phoneService.findPhoneNumbersForUser(this.device.userId).subscribe(data => {
      this.SelectablePhoneNumbers = data;
      console.log(this.SelectablePhoneNumbers);
    });
  }

  selectChangeHandler(event: any){
    this.currentSelection = event.target.value;
    console.log("User " + this.device.userId + " selected " + this.currentSelection);
  }

  addPhoneNumberToDevice(): void{
    var dummyDevice = new Device();
    dummyDevice.deviceId = this.device.deviceId;
    
    this.phoneService.find(this.currentSelection).subscribe(data => {
      dummyDevice.phoneNumber = data;
    });

    this.deviceService.changePhoneNumber(this.device.deviceId, this.currentSelection.id).subscribe(data => {
      console.log("Device returnd from addPhoneNumber: " + data);
    });
  }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    //console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    //console.log("Formatted phone number: " + formattedNumber);

    return formattedNumber;
  }
}
