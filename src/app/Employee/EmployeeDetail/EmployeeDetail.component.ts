import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service'
import { IEmployee } from "../Employee.model";

@Component({
  templateUrl: './EmployeeDetail.component.html',
  styleUrls: ['./EmployeeDetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: IEmployee
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.employee = this.employeeService.GetEmployee(4);
  }

}