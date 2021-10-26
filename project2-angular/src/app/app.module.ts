import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from '../components/user-list/users.component';
import { DevicesComponent } from '../components/device-list/devices.component';
import { PlansListComponent } from '../components/plans-list/plans-list.component';
import { NewUserComponent } from '../components/new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { HomeComponent } from '../components/home/home.component';
import { DeviceDetailsComponent } from '../components/device-details/device-details.component';
import { PlanDetailsComponent } from '../components/plan-details/plan-details.component';
import { UserLoginComponent } from '../components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DevicesComponent,
    PlansListComponent,
    NewUserComponent,
    UserDetailsComponent,
    HomeComponent,
    DeviceDetailsComponent,
    PlanDetailsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
