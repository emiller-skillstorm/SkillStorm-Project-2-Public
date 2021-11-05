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
  user!: User;
  @Output() loggedIn = new EventEmitter<boolean>();
  @Output() currentUser = new EventEmitter<User>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNewUser(): void {
    //When the form is submitted, run the password hash aglorithm
    //Store that hash in the user's passHash property before adding them to the database

    this.userService.registerNewUser(this.newUser).subscribe(data => {
      this.user = data;
      console.log("Added new user: " + this.user);

      this.loggedIn.emit(true);
      this.currentUser.emit(this.user);
    });
  }
}
