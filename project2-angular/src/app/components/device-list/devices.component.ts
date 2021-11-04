import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  showDeviceDetails: boolean = false;
  showRouterOutlet: boolean = false;

  constructor(private deviceService: DeviceService, private router: Router, private activeRoute: ActivatedRoute) { }

  // Display the list of devices for the current user
  ngOnInit(): void {
    // this.activeRoute.data.subscribe(id =>  {
    //   this.userId = id;
    console.log("Showing devices for user " + this.user.userId);

    this.deviceService.findDevicesForUser(this.user.userId).subscribe(data => 
      {
        this.DeviceList = data;
        console.log(this.DeviceList);
      });
      this.showRouterOutlet = false;
   // });
  }

  // When we click the details button, we can present a list of actions:
  // Change the phone number, remove the device, etc.
  details(device: Device): void {
    let route = this.router.config.find(r => r.path === 'device-details/:id');
    if (route) {
      route.data = device;
      this.router.navigateByUrl(`/device-details/${device.deviceId}`);
    }

    this.showDeviceDetails = true;
  }

  goToAddDevice() {
    //this.showAddButton = false;
    this.showRouterOutlet = false;
    
    let route = this.router.config.find(r => r.path === 'add-device/:id');

    if (route) {
      route.data = this.user;
      this.router.navigateByUrl(`/add-device/${this.user.userId}`);
    }
    
    this.showRouterOutlet = true;
  }

  remove(device: Device) {
    //implement
  }
}