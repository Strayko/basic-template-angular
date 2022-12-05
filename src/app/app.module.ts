import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { EmployeeService } from "./shared/employee.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeDetails} from "./employee/details/details.component";
import {MainAppComponent} from "./main-app.component";
import {DashboardComponent} from "./employee/dashboard/dashboard.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateComponent} from "./employee/create/create.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetails,
    MainAppComponent,
    DashboardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
