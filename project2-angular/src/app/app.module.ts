import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/user-list/users.component';
import { DevicesComponent } from './components/device-list/devices.component';
import { PlansComponent } from './components/plans-list/plans.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NavCanvasComponent } from './components/nav-canvas/nav-canvas.component';
import { LoginCanvasComponent } from './components/login-canvas/login-canvas.component';
import { PhonenumbersListComponent } from './components/phonenumbers-list/phonenumbers-list.component';
import { PhonenumberDetailsComponent } from './components/phonenumber-details/phonenumber-details.component';
import { BillingComponent } from './components/billing/billing.component';
import { AddPlanComponent } from './components/add-plan/add-plan.component'
import { AddPhonenumberToDeviceComponent } from './components/add-phonenumber-to-device/add-phonenumber-to-device.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DevicesComponent,
    PlansComponent,
    NewUserComponent,
    UserDetailsComponent,
    HomeComponent,
    DeviceDetailsComponent,
    AddDeviceComponent,
    PlanDetailsComponent,
    UserLoginComponent,
    NavCanvasComponent,
    LoginCanvasComponent,
    PhonenumbersListComponent,
    PhonenumberDetailsComponent,
    BillingComponent,
    AddPlanComponent,
    AddPhonenumberToDeviceComponent
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
