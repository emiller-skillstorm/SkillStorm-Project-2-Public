import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneNumber } from 'src/app/models/phonenumber.model';
import { User } from 'src/app/models/user.model';
import { Device } from '../../models/device.model';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {
  
  DeviceList: Device[] = [];

  @Input() user!: User;
  userId: any;

  @Output() back = new EventEmitter<boolean>();

  showAddDevice: boolean = false;
  showAddPhone: boolean = false;
  showDetails: boolean = false;

  storedDevice!: Device;

  constructor(private deviceService: DeviceService, private router: Router, private activeRoute: ActivatedRoute) { }

  // Returns all devices for user
  ngOnInit(): void {
    console.log("Showing devices for user " + this.user.userId);

    this.deviceService.findDevicesForUser(this.user.userId).subscribe(data => 
      {
        this.DeviceList = data;
        console.log(this.DeviceList);
      });

      this.showAddDevice = false;
      this.showDetails = false;
      this.showAddPhone = false;
  }

  details(device: Device): void {
    this.showAddDevice = false;
    this.showAddPhone = false;

    // let route = this.router.config.find(r => r.path === 'device-details/:id');
    // if (route) {
    //   route.data = device;
    //   this.router.navigateByUrl(`/device-details/${ device.deviceId }`);
    // }
    this.storedDevice = device;
    this.showDetails = true;
  }

  goToAddDevice(user: User) {
    this.showDetails = false;
    this.showAddPhone = false;

    // let route = this.router.config.find(r => r.path === 'add-device/:id');
    // if (route) {
    //   route.data = user;
    //   this.router.navigateByUrl(`/add-device/${ user.userId }`);
    // }

    this.showAddDevice = true;
  }

  remove(device: Device) {
    this.deviceService.removeDevice(device.deviceId);
  }

  goToAddPhoneNumber(device: Device) {
    this.showDetails = false;
    this.showAddDevice = false;

    // let route = this.router.config.find(r => r.path === 'add-phone-number-to-device/:id');

    // if (route) {
    //   route.data = device;
    //   this.router.navigateByUrl(`/add-phone-number-to-device/${device.deviceId}`);
    // }

    this.showAddPhone = true;
  }

  getFormattedPhoneNumber(phone: PhoneNumber) : string{
    var pn = phone.phoneNumberVal;
    //console.log("Preparing to format phone number: " + pn);
    var formattedNumber = `(${pn.substr(0, 3)}) ${pn.substr(3, 3)}-${pn.substr(6, 4)}`;
    //console.log("Formatted phone number: " + formattedNumber);

    return formattedNumber;
  }
}