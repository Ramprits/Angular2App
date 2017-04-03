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
import { OrderListComponent } from "./orderList/orderList.component";
import { OrderService } from "./orderList/order.service";
import { EmployeeListService } from "./employeeList/employee.service";
import { EmployeeListComponent } from "./employeeList/employee.component";
import { EmployeeListDetailComponent } from "./employeeList/EmployeeListDetailComponent";
import { AuthService } from "./user/auth.service";
import { FooterComponent } from './footer/footer.component';
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
    SupplierComponent,
    OrderListComponent,
    EmployeeListComponent,
    EmployeeListDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    FormsModule,
    HttpModule
  ],
  providers: [
    EmployeeService,
    OrderService,
    EmployeeListService,
    AuthService,
    ToasterService,
    ProductService,
    SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
