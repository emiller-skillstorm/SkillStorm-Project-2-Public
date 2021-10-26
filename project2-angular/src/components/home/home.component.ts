import { Component, OnInit } from '@angular/core';
import { Device } from '../../app/models/device.model';
import { DeviceService } from '../../app/services/device.service';
import { Router } from '@angular/router';
import { Plan } from '../../app/models/plan.model';
import { PlanService } from '../../app/services/plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DeviceList: Device[] = [];
  PlanList: Plan[] = [];

  //placeholder until we get user authentication done
  userId = 4;

  constructor(private planService: PlanService, private deviceService: DeviceService, private router: Router) { }

  //placeholder until we get user authentication done
  ngOnInit(): void {
    this.deviceService.findDevicesForUser(this.userId).subscribe( data => 
      {
        this.DeviceList = data;
        console.log(this.DeviceList);
      });

      this.planService.findPlansForUser(this.userId).subscribe( data => 
        {
          this.PlanList = data;
          console.log(this.PlanList);
        });
  }

  details(plan: Plan): void {
    let route = this.router.config.find(r => r.path === 'plan-details/:id');
    if (route) {
      route.data = plan;
      this.router.navigateByUrl(`/plan-details/${plan.planId}`);
    }
  }

  editDevice(device: Device): void {
    let route = this.router.config.find(r => r.path === 'device-details/:id');
    if (route) {
      route.data = device;
      this.router.navigateByUrl(`/device-details/${device.deviceId}`);
    }
  }

  
}
