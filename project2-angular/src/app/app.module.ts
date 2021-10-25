import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from '../components/usersTest/users.component';
import { DevicesComponent } from '../components/device-list/devices.component';
import { PlansListComponent } from '../components/plans-list/plans-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DevicesComponent,
    PlansListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
