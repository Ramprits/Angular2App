import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './Employee.service'

@Component({
  selector: 'app-Employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: any[]
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeList = this.employeeService.GetEmployees();
  }

}