import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { userRoutes } from "./user.routing";
import { LoginComponent } from "./login.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ],
  declarations: [UserComponent, LoginComponent]
})
export class UserModule { }
export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  userName: string
}