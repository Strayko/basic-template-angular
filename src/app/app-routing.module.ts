import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeDetails} from "./employee/details/details.component";
import {DashboardComponent} from "./employee/dashboard/dashboard.component";
import {CreateComponent} from "./employee/create/create.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details/:id', component: EmployeeDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
