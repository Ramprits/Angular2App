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
export const AppRoute: Routes = [
  { path: 'Welcome', component: WelComeComponent },
  { path: 'Employees/New', component: NewEmployeeComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'Employees/:Id', component: EmployeeDetailComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Suppliers', component: SupplierComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' }
]

