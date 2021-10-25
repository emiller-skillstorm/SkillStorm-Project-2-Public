import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Device } from '../../app/models/device.model';
import { DeviceService } from '../../app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  DeviceList: Device[] = [];

  constructor(private deviceService: DeviceService, private router: Router) { }

  //Testing on user 4
  ngOnInit(): void {
    this.deviceService.findDevicesForUser(4).subscribe( data => 
      {
        this.DeviceList = data;
        console.log(this.DeviceList);
      });
  }
}