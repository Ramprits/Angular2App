import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./Employee-list.component";

 export const EmployeeListroutes: Routes = [
  { path:'EmployeeList',component:EmployeeListComponent },
];

export const EmployeeListRoutes = RouterModule.forChild(EmployeeListroutes);
