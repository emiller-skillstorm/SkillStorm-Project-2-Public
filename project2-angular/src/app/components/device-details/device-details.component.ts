import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  deviceId: any;
  device!: Device;


  constructor(private dedviceService: DeviceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.deviceId = id;
      this.dedviceService.find(this.deviceId).subscribe(data => {
        this.device = data;
      });
    });
  }

}

