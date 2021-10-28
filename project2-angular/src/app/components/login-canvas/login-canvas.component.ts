import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-canvas',
  templateUrl: './login-canvas.component.html',
  styleUrls: ['./login-canvas.component.css']
})
export class LoginCanvasComponent implements OnInit {
  showSignup: boolean = false;
  showSignupButton: boolean = true;
  showLogin: boolean = false;
  showLoginButton: boolean = true;

  loginSucceeded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayLogin(){
    this.showLogin = true;
    this.showLoginButton = false;
    this.showSignup = false;
    this.showSignupButton = true;
    // let route = this.router.config.find(r => r.path === 'user-login');
    //   if(route){
    //     this.router.navigateByUrl('/user-login');
    //   }
  }

  displaySignup(){
    this.showSignup = true;
    this.showSignupButton = false;
    this.showLogin = false;
    this.showLoginButton = true;
    // let route = this.router.config.find(r => r.path === 'new-user');
    //   if(route){
    //     this.router.navigateByUrl('/new-user');
    //   }
  }
}
