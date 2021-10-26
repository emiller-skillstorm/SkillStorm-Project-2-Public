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
  myPlaintextPassword: string = "";
  credentials: string = "";
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  attemptLogin(): void {
    var hashValue = (+this.myPlaintextPassword % 30 + 16).toString();
    
    console.log(hashValue);

    this.credentials = this.username + ":" + hashValue;

     this.userService.userLogin(this.credentials).subscribe(data => {
       let route = this.router.config.find(r => r.path === 'devices');
        
       if(route){
          this.router.navigateByUrl('/devices' +`/${data.userId}`);
        }
      });
  }
}