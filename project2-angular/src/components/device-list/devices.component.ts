import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { Device } from '../../app/models/device.model';
import { DeviceService } from '../../app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {
  @Input() currentUser: User = new User();
  DeviceList: Device[] = [];
  userId: number = 4; //Testing

  constructor(private deviceService: DeviceService, private router: Router) { }

  //Testing on user 4
  ngOnInit(): void {
    this.deviceService.findDevicesForUser(this.userId).subscribe( data => 
      {
        this.DeviceList = data;
        console.log(this.DeviceList);
      });
  }

  // When we click the details button, we can present a list of actions:
  // Change the phone number, remove the device, etc.
  details(device: Device): void {
    let route = this.router.config.find(r => r.path === 'device-details/:id');
    if (route) {
      route.data = device;
      this.router.navigateByUrl(`/device-details/${device.deviceId}`);
    }
  }
}