import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = environment.deviceAPIurl;

  constructor(private httpClient: HttpClient) { }

  //Add new device
  find(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.url, device);
  }

  //Returns all devices
  findAll(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.url);
  }

  //Returns all devices for a given user
  findAllForUser(user: User): Observable<Device[]> {
    return this.httpClient.get<Device[]>(`${this.url}/UserDevices/${user.userId}`);
  }
}
