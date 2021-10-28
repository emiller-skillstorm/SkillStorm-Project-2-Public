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
  @Output() loggedIn = new EventEmitter<boolean>();

  user = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  attemptLogin(): void {
    this.userService.userLogin(this.username, this.password).subscribe(data => {
       if(data != null) {
         this.user = data;
         console.log(this.user);
         this.loggedIn.emit(true);
        
        //  let route = this.router.config.find(r => r.path === 'home/:id');
        //  if(route){
        //    this.router.navigateByUrl(`/home/${this.user.userId}`);
        //   }
        // }
      // });
      }
    });
  }
}