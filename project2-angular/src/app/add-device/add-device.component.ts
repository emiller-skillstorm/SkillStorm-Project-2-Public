import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { ActivatedRoute } from '@angular/router';
import { AvailableDevice } from '../models/available-device.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  user!: User;
  userId: any;
  

  SelectableDevices!: AvailableDevice[];
  currentSelection!: AvailableDevice;

  showThisComponent!: boolean;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute, private deviceService: DeviceService) { }

  ngOnInit(): void {

    this.activeRoute.data.subscribe(id => {
      this.userId = id;
      this.userService.find(this.userId).subscribe(data => {
        this.user = data;
      });
    });

    this.deviceService.findAllAvailableDevices().subscribe(data => {
      this.SelectableDevices = data;
      console.log(this.SelectableDevices);
    })
  }

  onSubmit() {
    this.deviceService.addDeviceToUser(this.userId, this.currentSelection.id);
    this.showThisComponent = false;
  }
  

}
