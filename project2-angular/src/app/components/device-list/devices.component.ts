import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
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

  constructor(private deviceService: DeviceService, private router: Router) { }

  // Display the list of devices for the current user
  ngOnInit(): void {
    this.deviceService.findDevicesForUser(this.user.userId).subscribe( data => 
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