import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from 'src/app/components/device-list/devices.component';
import { UsersComponent } from './components/user-list/users.component';
import { PlansListComponent } from './components/plans-list/plans-list.component';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DeviceDetailsComponent } from 'src/app/components/device-details/device-details.component';
import { PlanDetailsComponent } from 'src/app/components/plan-details/plan-details.component';
import { UserLoginComponent } from 'src/app/components/user-login/user-login.component';
import { LoginCanvasComponent } from './components/login-canvas/login-canvas.component';
import { NavCanvasComponent } from './components/nav-canvas/nav-canvas.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
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
    path: 'user-details', component: UserDetailsComponent
  },
  { 
    path: 'devices', component: DevicesComponent
  },
  { 
    path: 'plans', component: PlansListComponent
  },
  { 
    path: 'home', component: HomeComponent
  },
  {
    path: 'device-details/:id', component: DeviceDetailsComponent
  },
  {
    path: 'plan-details/:id', component: PlanDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
