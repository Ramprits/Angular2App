import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service'
import { IEmployee } from "../Employee.model";
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './EmployeeDetail.component.html',
  styleUrls: ['./EmployeeDetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: IEmployee
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.employee =
      this.employeeService.
        GetEmployee(+this.route.snapshot.params['Id']);
  }

}