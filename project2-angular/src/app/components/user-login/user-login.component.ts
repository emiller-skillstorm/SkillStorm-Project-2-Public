import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan.model';
import { User } from 'src/app/models/user.model';
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

  currentUser: User = new User();

  @Output() loginSuccess = new EventEmitter<boolean>(); // Notifies parent of login success
  @Output() user = new EventEmitter<User>(); // Notifies parent of user

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginSuccess.emit(false);
  }

  attemptLogin(): void {
     this.userService.userLogin(this.username, this.password).subscribe(data => {
       if(data != null) {
         this.currentUser = data;
         this.loginSuccess.emit(true);
         this.user.emit(this.currentUser);

         console.log(this.currentUser);

         let route = this.router.config.find(r => r.path === 'nav-canvas');
         if(route){
           this.router.navigateByUrl('/nav-canvas');
          }
        }
      });
    }
  }