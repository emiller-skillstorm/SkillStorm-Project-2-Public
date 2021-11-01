import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-canvas',
  templateUrl: './nav-canvas.component.html',
  styleUrls: ['./nav-canvas.component.css']
})
export class NavCanvasComponent implements OnInit {

  @Input() user!: User;
  userId: any;

  showNavButtons: boolean = true;
  showPlans: boolean = false;
  showDevices: boolean = false;
  showPhoneNumbers: boolean = false;
  showBilling: boolean = false;

  userNavigatedBack: boolean = false;
  
  constructor(private userservice: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activeRoute.data.subscribe(id =>  {
    //   this.userId = id;
    console.log("Displaying nav for user " + this.user.userId);

    // this.userservice.find(this.user).subscribe(data => 
    //   {
    //     this.user = data;
    //     console.log(this.user);
    //   });
    // });
  }

goToPlans() {
  //this.showNavButtons = false;
  this.showPlans = true;
  this.showDevices = false;
  this.showPhoneNumbers = false;
  this.showBilling = false;

  // let route = this.router.config.find(r => r.path === 'plans-list/:id');
  //       if(route){
  //         this.router.navigateByUrl(`/plans-list/${user.userId}`);
  //       }
  }

goToDevices() {
  //this.showNavButtons = false;
  this.showDevices = true;
  this.showPlans = false;
  this.showPhoneNumbers = false;
  this.showBilling = false;
  

  // let route = this.router.config.find(r => r.path === 'device-list/:id');
  //       if(route){
  //         this.router.navigateByUrl(`/device-list/${user.userId}`);
  //       }
  }

goToPhoneNumbers(){
  //this.showNavButtons = false;
  this.showPhoneNumbers = true;
  this.showDevices = false;
  this.showPlans = false;
  this.showBilling = false;
  

  // let route = this.router.config.find(r => r.path === 'phone-umbers/:id');
  //       if(route){
  //         this.router.navigateByUrl(`/phone-numbers/${user.userId}`);
  //       }
  }

goToBilling(){
  //this.showNavButtons = false;
  this.showBilling = true;
  this.showDevices = false;
  this.showPlans = false;
  this.showPhoneNumbers = false;
  

  // let route = this.router.config.find(r => r.path === 'billing/:id');
  //       if(route){
  //         this.router.navigateByUrl(`/billing/${user.userId}`);
  //       }
  }

  resetNavCanvas(){
    this.showNavButtons = true;
    this.showPlans = false;
    this.showDevices = false;
    this.showPhoneNumbers = false;
    this.showBilling = false;

    this.userNavigatedBack = false;
  }
}

