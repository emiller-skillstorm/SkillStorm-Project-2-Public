import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan.model';
import { AvailablePlan } from '../models/available-plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = environment.planAPIurl;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(this.url);
  }

  findAllAvailablePlans(): Observable<AvailablePlan[]> {
    return this.httpClient.get<AvailablePlan[]>(this.url + '/AvailablePlans');
  }

  findPlansForUser(id: number): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`${this.url}/UserPlans/${id}`);
  }

  addPlanToUser(userId: number, planId: number) {
    var data = {'uId': userId, 'apId': planId};
    this.httpClient.post<Plan>(this.url + '/AddPlanToUser/', {uId: `${userId}`, apId: `${planId}`});
  }

  find(plan: Plan): Observable<Plan> {
    return this.httpClient.get<Plan>(this.url + `/${plan.planId}`);
  }

  removePlan(planId: number){
    this.httpClient.delete(this.url + `/${planId}`, {observe: "response"});
  }
}
