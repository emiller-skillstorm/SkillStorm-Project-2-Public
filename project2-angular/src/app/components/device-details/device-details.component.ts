import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  deviceId: any;
  @Input() device!: Device;


  constructor(private dedviceService: DeviceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activeRoute.data.subscribe(id => {
    //   this.deviceId = id;
    //   this.dedviceService.find(this.deviceId).subscribe(data => {
    //     this.device = data;
    //   });
    // });
    this.deviceId = this.device.deviceId;
    console.log("Showing details for device " + this.deviceId)
  }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    //console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    //console.log("Formatted phone number: " + formattedNumber);

    return formattedNumber;
  }

}

