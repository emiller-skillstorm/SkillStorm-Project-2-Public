import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from 'src/components/device-list/devices.component';
import { UsersComponent } from '../components/usersTest/users.component';
import { PlansListComponent } from '../components/plans-list/plans-list.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  { 
    path: 'devices', component: DevicesComponent
  },
  { 
    path: 'plans', component: PlansListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
