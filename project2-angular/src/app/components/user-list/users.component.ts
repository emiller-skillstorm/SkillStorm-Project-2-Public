import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

/*
// This should only be used during testing.
// No normal user should see a list of all the other users.
*/

export class UsersComponent implements OnInit {

  UserList: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => 
      {
        this.UserList = data;
        console.log(this.UserList);
      });
  }

  details(user: User): void {
    let route = this.router.config.find(r => r.path === 'user-details/:id');
    if (route) {
      route.data = user;
      this.router.navigateByUrl(`/user-details/${user.userId}`);
    }
  }
}
