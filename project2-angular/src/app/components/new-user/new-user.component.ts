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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNewUser(): void {
    //When the form is submitted, run the password hash aglorithm
    //Store that hash in the user's passHas property before adding them to the database

    this.userService.registerNewUser(this.newUser).subscribe(data => {
      this.currentUser = data;
      console.log("Added new user: " + this.currentUser);

      let route = this.router.config.find(r => r.path === 'nav-canvas/:id');
      if(route){
        this.router.navigateByUrl(`/nav-canvas/${this.currentUser.userId}`);
      }
    });
  }
}
