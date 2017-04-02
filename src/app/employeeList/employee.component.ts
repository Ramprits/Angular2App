import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "./employee.service";
import { IEmployee } from "./employee.module";

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html'
})
export class EmployeeListComponent implements OnInit {
    EmployeeList: IEmployee[];

    constructor(private employeeService: EmployeeListService) { }

    ngOnInit() {
        this.employeeService.GetEmployees().subscribe(employees =>
        { this.EmployeeList = employees });
    }

}