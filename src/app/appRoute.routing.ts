import { Routes } from '@angular/router';
import { WelComeComponent } from './WelCome/WelCome.component'
import { EmployeeComponent } from './Employee/Employee.component'
import { EmployeeDetailComponent } from './Employee/EmployeeDetail/EmployeeDetail.component'
import{ContactComponent} from './Contact/Contact.component'





export const AppRoute: Routes = [
  { path: 'Welcome', component: WelComeComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'Employees/:Id', component: EmployeeDetailComponent },
  {path:'Contact',component:ContactComponent},
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' }
]

