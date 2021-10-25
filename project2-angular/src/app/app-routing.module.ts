import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from 'src/components/device-list/devices.component';
import { UsersComponent } from '../components/usersTest/users.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  { 
    path: 'devices', component: DevicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
