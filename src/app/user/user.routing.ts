import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./user.component";
import { LoginComponent } from "./login.component";

export const userRoutes: Routes = [
  { path: 'profile', component: UserComponent },
  { path: 'login', component: LoginComponent }
];

export const UserRoutes = RouterModule.forChild(userRoutes);
