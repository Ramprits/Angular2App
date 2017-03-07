import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationsComponent } from './Navigations/Navigations.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { EmployeeService } from './Employee/Employee.service'
import { EmployeeDetailComponent } from './Employee/EmployeeDetail/EmployeeDetail.component'
import { RouterModule } from "@angular/router";
import { routes } from './appRoute.routing'
@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
