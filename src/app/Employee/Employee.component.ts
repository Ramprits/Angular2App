import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './Employee.service'

  @Component({
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: any[]
  Employees: any
  loading: any
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.employeeService.GetEmployees()
    .subscribe(Employees => { this.Employees = Employees });
  }

}