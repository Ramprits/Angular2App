import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationsComponent } from './Navigations/Navigations.component';
import { NewEmployeeComponent } from './Employee/NewEmployee/NewEmployee.component'

import {
  ProductComponent,
  ProductService

} from './Product/index';
import {
  EmployeeService,
  EmployeeComponent,
  ToasterService,
  EmployeeDetailComponent
} from './Employee/index'
import {
  SupplierComponent,
  SupplierService
} from './Supplier/index'
import { RouterModule } from "@angular/router";
import { AppRoute } from './appRoute.routing'
import { WelComeComponent } from './WelCome/WelCome.component';
import { ContactComponent } from './Contact/Contact.component';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    WelComeComponent,
    ContactComponent,
    NewEmployeeComponent,
    ErrorComponent,
    ProductComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService,
    ToasterService,
    ProductService,
    SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
