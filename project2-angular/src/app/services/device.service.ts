import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';
import { User } from '../models/user.model';
import { PhoneNumber } from '../models/phonenumber.model';
import { AvailableDevice } from '../models/available-device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = environment.deviceAPIurl;

  constructor(private httpClient: HttpClient) { }

  //Add new device
  addDevice(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.url, device);
  }

  //Changes a device's phone number and returns the updated device
  changePhoneNumber(deviceId: number, phoneId: number): Observable<Device> {
    return this.httpClient.post<Device>(this.url + '/ChangePhoneNumber/', {deviceId: deviceId, phoneId: phoneId});
  }

  //Returns all devices
  findAllDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.url);
  }

  //Returns all devices for a given user
  findDevicesForUser(id: number): Observable<Device[]> {
    return this.httpClient.get<Device[]>(`${this.url}/UserDevices/${id}`);
  }

  //Returns a specific device
  find(device: Device): Observable<Device> {
    return this.httpClient.get<Device>(this.url + `/${device.deviceId}`);
  }

  findAllAvailableDevices(): Observable<AvailableDevice[]> { 
    return this.httpClient.get<AvailableDevice[]>(this.url + '/AvailableDevices');
  }

  addDeviceToUser(userId: number, deviceId: number) {
    this.httpClient.post<Device>(this.url + `/AddDeviceToUser/`, JSON.stringify({"userId": userId, "deviceId": deviceId}));
  }
}
