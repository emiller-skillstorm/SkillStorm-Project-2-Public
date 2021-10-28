import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.userAPIurl;

  constructor(private httpClient: HttpClient) { }

  hashPassword(username: string, password: string): string {
    var hash = "";

    for(let i = 1; i < password.length - 1; i++) {
      hash += password[password.length - i]
    }

    for(let k = username.length; k > 0; k--) {
      hash += username[username.length % k]
    }
    
    console.log(hash);
    return hash;
  }

  //New user registration
  registerNewUser(user: User): Observable<User> {
    // The user will be sent with a plain text password.
    // We need to hash it first, then store the hashed password as thier passHash.
    user.passHash = this.hashPassword(user.email, user.passHash);

    return this.httpClient.post<User>(this.url, user);
  }

  find(user: User): Observable<User> {
    return this.httpClient.get<User>(this.url + `/${user.userId}`);
  }

  //returns all users
  findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  userLogin(username: string, password: string): Observable<User> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('passHash', this.hashPassword(username, password));
    var currentUser = this.httpClient.post<User>(this.url + '/Login/', body);
    console.log(currentUser);
    return currentUser;
  }
}
