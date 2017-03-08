import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../Employee.service'

@Component({
  templateUrl: './EmployeeDetail.component.html',
  styleUrls: ['./EmployeeDetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: any
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.employee = this.employeeService.GetEmployee(2);
  }

}