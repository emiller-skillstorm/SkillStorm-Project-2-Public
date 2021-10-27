import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
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

  hashPassword(): string {
    var hash = "";

    for(let i = 1; i < this.password.length - 1; i++) {
      hash += this.password[this.password.length - i]
    }

    for(let k = this.username.length; k > 0; k--) {
      hash += this.username[this.username.length % k]
    }
    
    console.log(hash);
    return hash;
  }

  attemptLogin(): void {
    // Testing -- Still need to get this hashed for security

    this.credentials = this.username + "-" + this.hashPassword();
    console.log(this.credentials);

     this.userService.userLogin(this.credentials).subscribe(data => {
       let route = this.router.config.find(r => r.path === 'home');
        
       if(route){
          this.router.navigateByUrl('/home');
        }
      });
  }
}