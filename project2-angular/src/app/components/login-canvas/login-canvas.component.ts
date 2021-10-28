import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-canvas',
  templateUrl: './login-canvas.component.html',
  styleUrls: ['./login-canvas.component.css']
})
export class LoginCanvasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    let route = this.router.config.find(r => r.path === 'user-login');
      if(route){
        this.router.navigateByUrl('/user-login');
      }
  }

  goToSignup(){
    let route = this.router.config.find(r => r.path === 'new-user');
      if(route){
        this.router.navigateByUrl('/new-user');
      }
  }
}
