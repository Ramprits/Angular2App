import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationsComponent } from './Navigations/Navigations.component';
import{NewEmployeeComponent} from './Employee/NewEmployee/NewEmployee.component'
import { EmployeeComponent } from './Employee/Employee.component';
import { EmployeeService } from './Employee/Employee.service'
import { EmployeeDetailComponent } from './Employee/EmployeeDetail/EmployeeDetail.component'
import { RouterModule } from "@angular/router";
import { AppRoute } from './appRoute.routing'
import { WelComeComponent } from './WelCome/WelCome.component';
import { ContactComponent } from './Contact/Contact.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    WelComeComponent,
    ContactComponent,
    NewEmployeeComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
