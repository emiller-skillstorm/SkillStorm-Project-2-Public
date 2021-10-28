import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-canvas',
  templateUrl: './nav-canvas.component.html',
  styleUrls: ['./nav-canvas.component.css']
})
export class NavCanvasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

goToPlans() {
  let route = this.router.config.find(r => r.path === 'plans');
        if(route){
          this.router.navigateByUrl('/plans');
        }
  }

goToDevices() {
  let route = this.router.config.find(r => r.path === 'devices');
        if(route){
          this.router.navigateByUrl('/devices');
        }
  }

goToPhoneNumbers(){
  let route = this.router.config.find(r => r.path === 'phone-umbers');
        if(route){
          this.router.navigateByUrl('/phone-numbers');
        }
  }

goToBilling(){
  let route = this.router.config.find(r => r.path === 'billing');
        if(route){
          this.router.navigateByUrl('/billing');
        }
  }
}

