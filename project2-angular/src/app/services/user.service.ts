import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.userAPIurl;

  constructor(private httpClient: HttpClient) { }

  //New user registration
  registerNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  find(user: User): Observable<User> {
    return this.httpClient.get<User>(this.url + `/${user.userId}`);
  }

  //returns all users
  findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  userLogin(loginString: string): Observable<User> {
    var currentUser = this.httpClient.get<User>(this.url + '/Login' + `/${loginString}`);
    console.log(currentUser);
    return currentUser;
  }
}
