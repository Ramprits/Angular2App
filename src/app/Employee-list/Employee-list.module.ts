import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './Employee-list.component';
import { RouterModule } from '@angular/router';
import { EmployeeListroutes } from "./Employee-list.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeListroutes)
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeListModule { }