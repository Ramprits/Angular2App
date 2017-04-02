import { Routes } from '@angular/router';
import { WelComeComponent } from './WelCome/WelCome.component'
import { NewEmployeeComponent } from './Employee/NewEmployee/NewEmployee.component'
import { ContactComponent } from './Contact/Contact.component'
import { ErrorComponent } from './error/error.component';
import {
  EmployeeService,
  EmployeeComponent,
  ToasterService,
  EmployeeDetailComponent
} from './Employee/index'

import {
  ProductComponent,
  ProductService

} from './Product/index';
import {
  SupplierComponent,
  SupplierService
} from './Supplier/index'
import { OrderListComponent } from "./orderList/orderList.component";
import { EmployeeListComponent } from "./employeeList/employee.component";
import { EmployeeListDetailComponent } from "./employeeList/EmployeeListDetailComponent";
export const AppRoute: Routes = [
  { path: 'Welcome', component: WelComeComponent },
  { path: 'Orders', component: OrderListComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'EmployeeList/:EmployeeID', component: EmployeeListDetailComponent },
  { path: 'Employees/:Id', component: EmployeeDetailComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Suppliers', component: SupplierComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'Employee', loadChildren: 'app/Employee-list/Employee-list.module#EmployeeListModule' }
]

