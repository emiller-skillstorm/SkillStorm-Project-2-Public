import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from 'src/components/device-list/devices.component';
import { NewUserComponent } from 'src/components/new-user/new-user.component';
import { UserDetailsComponent } from 'src/components/user-details/user-details.component';
import { UsersComponent } from '../components/user-list/users.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  { 
    path: 'new-user', component: NewUserComponent
  },
  { 
    path: 'user-details', component: UserDetailsComponent
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
