import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  credentials: string = "";
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  attemptLogin(): void {
    // Testing -- Still need to get this hashed for security
    // var hashValue = (+this.password % 30 + 16).toString();

    this.credentials = this.username + "-" + this.password;

     this.userService.userLogin(this.credentials).subscribe(data => {
       let route = this.router.config.find(r => r.path === 'home');
        
       if(route){
          this.router.navigateByUrl('/home');
        }
      });
  }
}