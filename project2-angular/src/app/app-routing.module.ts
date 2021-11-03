import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from 'src/app/components/device-list/devices.component';
import { UsersComponent } from './components/user-list/users.component';
import { PlansComponent } from 'src/app/components/plans-list/plans.component';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DeviceDetailsComponent } from 'src/app/components/device-details/device-details.component';
import { PlanDetailsComponent } from 'src/app/components/plan-details/plan-details.component';
import { UserLoginComponent } from 'src/app/components/user-login/user-login.component';
import { LoginCanvasComponent } from './components/login-canvas/login-canvas.component';
import { NavCanvasComponent } from './components/nav-canvas/nav-canvas.component';
import { PhonenumbersListComponent } from './components/phonenumbers-list/phonenumbers-list.component';
import { PhonenumberDetailsComponent } from './components/phonenumber-details/phonenumber-details.component';
import { BillingComponent } from './components/billing/billing.component';
import { AddPlanComponent } from './components/add-plan/add-plan.component';

const routes: Routes = [
  {
    path: 'login-canvas', component: LoginCanvasComponent
  },
  {
    path: 'nav-canvas', component: NavCanvasComponent
  },
  { 
    path: 'new-user', component: NewUserComponent
  },
  {
    path: 'user-login', component: UserLoginComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  { 
    path: 'user-details', component: UserDetailsComponent
  },
  { 
    path: 'devices', component: DevicesComponent
  },
  {
    path: 'device-details/:id', component: DeviceDetailsComponent
  },
  {
    path: 'phonenumbers', component: PhonenumbersListComponent
  },
  {
    path: 'phonenumber-details/:id', component: PhonenumberDetailsComponent
  },
  { 
    path: 'plans', component: PlansComponent
  },
  {
    path: 'add-plan/:id', component: AddPlanComponent
  },
  {
    path: 'plan-details/:id', component: PlanDetailsComponent
  },
  {
    path: 'billing', component: BillingComponent
  },
  { 
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
