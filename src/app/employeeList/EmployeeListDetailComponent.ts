import {IEmployee} from '../Employee/Employee.model';
import { Params, ActivatedRoute } from '@angular/router';
import { EmployeeListService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'EmployeeListDetail.component.html'
})
export class EmployeeListDetailComponent implements OnInit {

    constructor(private _employeeListService: EmployeeListService,
        private route: ActivatedRoute) { }

    ngOnInit() {
       
    }
}