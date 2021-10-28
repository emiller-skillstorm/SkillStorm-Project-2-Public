import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUser: User = new User();
  currentUser!: User;

  @Output() loginSuccess = new EventEmitter<boolean>(); // Notifies parent of login success
  @Output() user = new EventEmitter<User>(); // Notifies parent of user

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginSuccess.emit(false);
  }

  registerNewUser(): void {
    //When the form is submitted, run the password hash aglorithm
    //Store that hash in the user's passHas property before adding them to the database

    this.userService.registerNewUser(this.newUser).subscribe(data => {
      console.log("Added new user: " + data);
      this.currentUser = data;
      this.loginSuccess.emit(true);
      this.user.emit(this.currentUser);

      let route = this.router.config.find(r => r.path === 'nav-canvas');
      if(route){
        this.router.navigateByUrl('/nav-canvas');
      }
    });
  }
}
