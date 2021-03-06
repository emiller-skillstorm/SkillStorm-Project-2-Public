import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneNumber } from '../models/phonenumber.model';
import { AvailablePhonenumber } from '../models/available-phonenumber.model';

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
  find(phone: PhoneNumber): Observable<PhoneNumber> {
    return this.httpClient.get<PhoneNumber>(this.url + `/${phone.id}`);
  }

  findAllAvailablePhoneNumbers(): Observable<AvailablePhonenumber[]> { 
    return this.httpClient.get<AvailablePhonenumber[]>(this.url + '/AvailablePhoneNumbers');
  }

  addPhoneNumberToUser(userId: number, phoneId: number) {
    return this.httpClient.post<any>(this.url + '/AddPhoneNumberToUser/', {userId: userId, phoneId: phoneId});
  }
}
