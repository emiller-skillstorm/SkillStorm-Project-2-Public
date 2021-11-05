import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { ActivatedRoute } from '@angular/router';
import { AvailableDevice } from '../../models/available-device.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  @Input() user!: User;
  userId: any;
  
  SelectableDevices!: AvailableDevice[];
  currentSelection!: AvailableDevice;

  showThisComponent!: boolean;

  constructor(private userService: UserService, private deviceService: DeviceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void { 

    //  this.activeRoute.data.subscribe(id => {
    //   this.userId = id;

    //   this.userService.find(this.userId).subscribe(data => {
    //     this.user = data;
    //     console.log("Add device for user " + this.userId);
    //   });
    // });
    console.log("Adding device for user " + this.user.userId);

    this.deviceService.findAllAvailableDevices().subscribe(data => {
      this.SelectableDevices = data;
      console.log(this.SelectableDevices);
    })
  }

  selectChangeHandler(event: any){
    this.currentSelection = event.target.value;
    console.log(this.currentSelection);
  } 

  addDevice() {
    console.log(this.user.userId + " selected " + this.currentSelection);
    this.deviceService.addDeviceToUser(this.user.userId, this.currentSelection.id);
    //this.showThisComponent = false;
  }
}
