import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUser: User = new User("FirstName", "LastName", "Email@mail.com");

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNewUser(): void {
    //When the form is submitted, run the password hash aglorithm
    //Store that hash in the user's passHas property before adding them to the database

    this.userService.registerNewUser(this.newUser).subscribe(data => {
      console.log("Added new user: " + data);

      let route = this.router.config.find(r => r.path === 'users');
      if(route){
        this.router.navigateByUrl('/user-details' +`/${data.userId}`);
      }
    });
  }

}
