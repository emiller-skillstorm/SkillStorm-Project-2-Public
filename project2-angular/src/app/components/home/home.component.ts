import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../models/device.model';
import { DeviceService } from '../../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DeviceList: Device[] = [];
  PlanList: Plan[] = [];

  user!: User;
  userId: any;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute, private router: Router) { }

  //placeholder until we get user authentication done
  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.userId = id;

      this.userService.find(this.userId).subscribe(data => 
        {
          this.user = data;
          console.log(this.user);
        });
    });
  }

  // details(plan: Plan): void {
  //   let route = this.router.config.find(r => r.path === 'plan-details/:id');
  //   if (route) {
  //     route.data = plan;
  //     this.router.navigateByUrl(`/plan-details/${plan.planId}`);
  //   }
  // }

  // editDevice(device: Device): void {
  //   let route = this.router.config.find(r => r.path === 'device-details/:id');
  //   if (route) {
  //     route.data = device;
  //     this.router.navigateByUrl(`/device-details/${device.deviceId}`);
  //   }
  //}
  
}
