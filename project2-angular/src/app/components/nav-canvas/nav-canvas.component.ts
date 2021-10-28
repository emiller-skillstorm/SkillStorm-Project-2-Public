import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-canvas',
  templateUrl: './nav-canvas.component.html',
  styleUrls: ['./nav-canvas.component.css']
})
export class NavCanvasComponent implements OnInit {

  user!: User;
  userId: any;
  
  constructor(private userservice: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id =>  {
      this.userId = id;
    
    this.userservice.find(this.userId).subscribe(data => 
      {
        this.user = data;
        console.log(this.user);
      });
    });
  }

goToPlans(user: User) {
  let route = this.router.config.find(r => r.path === 'plans-list/:id');
        if(route){
          this.router.navigateByUrl(`/plans-list/${user.userId}`);
        }
  }

goToDevices(user: User) {
  let route = this.router.config.find(r => r.path === 'device-list/:id');
        if(route){
          this.router.navigateByUrl(`/device-list/${user.userId}`);
        }
  }

goToPhoneNumbers(user: User){
  let route = this.router.config.find(r => r.path === 'phone-umbers/:id');
        if(route){
          this.router.navigateByUrl(`/phone-numbers/${user.userId}`);
        }
  }

goToBilling(user: User){
  let route = this.router.config.find(r => r.path === 'billing/:id');
        if(route){
          this.router.navigateByUrl(`/billing/${user.userId}`);
        }
  }
}

