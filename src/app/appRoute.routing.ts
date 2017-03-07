import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './Employee/Employee.component'

export const routes: Routes = [

  { path: 'Employees', component: EmployeeComponent },
  { path: '', redirectTo: '/Employees', pathMatch: 'full' }
];

// export const AppRouteRoutes = RouterModule.forChild(routes);
