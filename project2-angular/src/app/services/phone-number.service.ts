import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneNumber } from '../models/phonenumber.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  url = environment.phonenumberAPIurl;


  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<PhoneNumber[]> {
    return this.httpClient.get<PhoneNumber[]>(this.url);
  }

  findPhoneNumbersForUser(id: number): Observable<PhoneNumber[]> {
    return this.httpClient.get<PhoneNumber[]>(`${this.url}/UserPhoneNumbers/${id}`);
  }

  //Returns a specific phone number
  find(phoneNumber: PhoneNumber): Observable<PhoneNumber> {
    return this.httpClient.get<PhoneNumber>(this.url + `/${phoneNumber.id}`);
  }
}
