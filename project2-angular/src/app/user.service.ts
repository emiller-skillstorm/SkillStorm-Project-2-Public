import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '';

  constructor(private httpClient: HttpClient) { }

  //New user registration
  registerNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }
}
