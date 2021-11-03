import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = environment.planAPIurl;


  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(this.url);
  }

  findPlansForUser(id: number): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`${this.url}/UserPlans/${id}`);
  }

  //Returns a specific plan
  find(plan: Plan): Observable<Plan> {
    return this.httpClient.get<Plan>(this.url + `/${plan.planId}`);
  }
}
